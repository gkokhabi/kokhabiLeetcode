/*
Leetcode number: 3

Given a string s, find the length of the longest substring without repeating characters.

*/


var lengthOfLongestSubstring = function(s) {
  const charSet = new Set();
  let l = 0, res = 0;
  for(let r = 0; r < s.length; r++){
      while(charSet.has(s[r])){
          charSet.delete(s[l]);
          l += 1;
      }
      charSet.add(s[r]);
      res = Math.max(res, r - l + 1);
  }
  return res;
};