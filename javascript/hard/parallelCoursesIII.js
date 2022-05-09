/*
Leetcode number: 2050 

You are given an integer n, which indicates that there are n courses labeled from 1 to n. 
You are also given a 2D integer array relations where relations[j] = [prevCoursej, nextCoursej] denotes that course prevCoursej has to be completed before course nextCoursej (prerequisite relationship). 
Furthermore, you are given a 0-indexed integer array time where time[i] denotes how many months it takes to complete the (i+1)th course.

You must find the minimum number of months needed to complete all the courses following these rules:

You may start taking a course at any time if the prerequisites are met.
Any number of courses can be taken at the same time.
Return the minimum number of months needed to complete all the courses.

Note: The test cases are generated such that it is possible to complete every course (i.e., the graph is a directed acyclic graph).
*/


/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
 var minimumTime = function(n, relations, time) {
  /*
  Approach: We can create reverse edges for relation.
  Then longest path(by weightage of time for each node) from the node will be the minimum time to finish that course(node)
  Now we can use simple DFS to find the longest path for each node.
  The node containing the longest path will be course to finish the last.We can also use memo to save the longest path from node, so when we reach to this node, we need not to calculate the longest path again. 
  */
  const edges={};
  for(let i=0;i<relations.length;i++){
      if(edges[relations[i][1]]===undefined){
          edges[relations[i][1]] = [];
      }
      edges[relations[i][1]].push(relations[i][0]);
  }

  let max=0,timeRequired,memo={};
  for(let i=1;i<=n;i++){
      timeRequired = longestPath(i);
      max = Math.max(max,timeRequired);
  }
  return max;
   function longestPath(node){
       if(memo[node]!==undefined){
           return memo[node];
       }
      let len,max=0;
       if(edges[node]!==undefined){
           for(let i=0;i<edges[node].length;i++){
               len = longestPath(edges[node][i]);
               max = Math.max(max,len);
           }
       }
       memo[node] = time[node-1]+max;
       //use memo to save the longest path from node, so when we reach to this node, we need not to calculate the longest path again
       return memo[node];
  }
};