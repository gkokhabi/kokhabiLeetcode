/*
Leetcode number: 720

Given an array of strings words representing an English Dictionary, 
return the longest word in words that can be built one character at a time by other words in words.

If there is more than one possible answer, 
return the longest word with the smallest lexicographical order. 
If there is no answer, return the empty string.

*/

/**
 * @param {string[]} words
 * @return {string}
 */
 var longestWord = function(words) {
  if (!words || words.length == 0) return "";
  let res = "";
  let set = new Set(); //store valid word
  words.sort(); //sort string 
  for (let word of words){
      let prev = word.substring(0, word.length -1);
      if (word.length == 1 || set.has(prev)){  //store only one char, or has word before itself
          res = (word.length > res.length) ? word : res;
          set.add(word);
      }
  }
  return res;
};


/*
check if set has word before itself, if yes, valid
then check if need update res compare string.length
then find longest word with smallest lexicographical order
*/