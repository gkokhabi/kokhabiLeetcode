/*
Leetcode number: 269 

There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.

You are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language.

Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return "". If there are multiple solutions, return any of them.

A string s is lexicographically smaller than a string t if at the first letter where they differ, the letter in s comes before the letter in t in the alien language. If the first min(s.length, t.length) letters are the same, then s is smaller if and only if s.length < t.length.

*/

/**
 * @param {string[]} words
 * @return {string}
 */
 var alienOrder = function(words) {
  //we are basically building a graps, and than topologically sorting it
  //we get the "edge" if there is a rule for a letter. All the letters that 
  //are outside of the rule just get thrown in the mix. This is why we need to keep 
  //track of ALL the letters in the set
  let edges = [];
  //dependencies is the dictinary that keeps track of the all the incoming edges to each letter
  let dependencies = {};
  let set = new Set();
  for (let i = 0; i<words.length-1; i++) {
      // here we loop through the words in the pairwise fashion and 
      //compare the letters that differ in each word
      //if they differ, we have a rule
      let first = words[i], second = words[i+1];
      first.split("").forEach(l=>set.add(l))
      let s;
      first.length<second.length ? s = first.length : s = second.length;
      for (let j = 0; j<s; j++) {
          if (first[j]!==second[j]) {
              edges.push([first[j], second[j]]);
              break;
          }
          //in case all the letters are equal but the first word is longer
          else if (j===s-1 && first[s]!==undefined) {
              return ""
          }
      }
  }
  //add the letters of the last word to the set
  words[words.length-1].split("").forEach(l=>set.add(l));
  
  //if there is only one letter, we return that letter
  if (set.size===1) return words[0][0];

  let adj = {};
  //here we build the adjacency matrix for the kahn`s algorithm
  for (let [prev, next] of edges) {
      if (!adj[prev]) adj[prev]  = [];
      if (!dependencies[next]) dependencies[next]  = 0;
      if (!dependencies[prev]) dependencies[prev]  = 0;
      adj[prev].push(next);
      dependencies[next]++;
  }
  
  //if we can not find any rules in the graph. than it is not connected and 
  // we just throw the letters in the random order
  if (Object.keys(adj).length===0) return [...set].join("")
  
  //here we build the queue for the kahns algorithm
  let q = [];
  //here we add all the nodes without dependencies to the queue
  for (let i in dependencies) {
      if (dependencies[i]===0) {
          q.push(i)
      }
  }
  //if all of the nodes depend on each other, than it means we have a cycle in the graph
  //and there is no topological order, so we have to return no answer answer
  if (q.length===0) return ""
  let order = "";
  while (q.length) {
      let current = q.pop();
      order+=current;
      if (adj[current]) {
          for (let next of adj[current]) {
              dependencies[next]--;
              if (dependencies[next]===0) {
                  q.push(next);
              }
          }
      }
  }
  //if there are any nodes left in the graph with the dependencies in the graph we have to return 
  //a negative answer because there is a cycle
  for (let i in dependencies) {
      if (dependencies[i]>0) return ""
  }
  //here we check for any unconnected nodes and throw them in in any order
  if (set.size!==order.length) {
      for (let letter of set) {
          if (order.indexOf(letter)===-1) {
              order+=letter
          }
      }
  }
  return order
};