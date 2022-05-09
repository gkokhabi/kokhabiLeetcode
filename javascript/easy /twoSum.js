/*
Leetcode Number: 1

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


 const twoSum = function(nums, target){
  const cache = {};
  //loop through all the numbers
  for(let i=0; i<nums.length; i++){
      //grab the current number
      const n = nums[i];
      //check if the number we need to add to n to reach our tagret has been seen 
      if(cache[target-n]!==undefined){
          //grab the index of the seen number we just saw
          return [cache[target-n], i]
      }
      //update our cache to include the number we just saw along with its index
      cache[n]=i
  }
  //if all fails (aka we cant find a pair to add to target)-> return an empty array 
  return []
}
