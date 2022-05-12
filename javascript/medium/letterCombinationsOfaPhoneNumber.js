/*
Leetcode number: 17

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


*/

var letterCombinations = function(digits) {  
  const res = []
  let map = {
       2: "abc",
       3: "def",
       4: "ghi",
       5: "jkl",
       6: "mno",
       7: "pqrs",
       8: "tuv",
       9: "wxyz"  
   }
  
  const queue = []
  queue.push("")
  while(queue.length) {
      let curr = queue.shift() 
      if(curr && curr.length === digits.length) {
          res.push(curr)
      } else {
          let child = map[+digits[curr.length]] 
          if(child) {
             for(let c of child) {
                queue.push(curr + c) 
             }
          }  
      }
    }
  return res
}


