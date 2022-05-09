/*
Leetcode number: 76 

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

 */


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

 function minWindow(s, t){
  let ans=''
  const map={}
  t.split('').forEach(ch=>map[ch]=(map[ch] || 0)+1);
  let count = Object.keys(map).length
  let left =0;
  let right =-1
  while(right< s.length){
      if(count===0){
          if(!ans || right-left+1 < ans.length) ans = s.slice(left, right+1)
          if(map[s[left]] !== undefined) map[s[left]]++
          if(map[s[left]] > 0) count++
          left++
      }else{
          right++
          if(map[s[right]]!==undefined) map[s[right]]--
          if(map[s[right]]===0) count--
      }
  }
  return ans
}

