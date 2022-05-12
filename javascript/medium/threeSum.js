/*
Leetcode number: 15

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

*/


var threeSum = function(nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for(let i = 0; i < nums.length -1; i++){
      if(i > 0 && nums[i] == nums[i-1]){
          continue;
      }
      let l = i +1, r = nums.length - 1;
      while(l < r){
          const threeSum = nums[i] + nums[l] + nums[r];
          if(threeSum > 0){
              r -= 1;
          }else if(threeSum < 0){
              l += 1;
          }else {
              res.push([nums[i], nums[l], nums[r]]);
              l += 1;
              while(nums[l] == nums[l - 1] && l < r){
                  l += 1;
              }
          }
      }
  }
  return res;
};