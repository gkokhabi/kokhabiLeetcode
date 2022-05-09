/*
Leetcode number: 698
Given an integer array nums and an integer k, 
return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.

 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var canPartitionKSubsets = function(nums, k) {
  const total = nums.reduce((a,b) => a + b)
if((total % k) !== 0) return false
const eachTotal = total/k
const visited = Array.from({length: nums.length}, () => false)

function dfs(remain, i, currSum){
  if(remain === 0) return true

  if(currSum === eachTotal) return dfs(remain-1, 0, 0)

  for(let j=i; j<nums.length; j++){
    if(visited[j] === false && currSum+nums[j] <= eachTotal){
      visited[j]=true
      if(dfs(remain, j+1, currSum+nums[j]) === true){
        return true
      }
      visited[j]=false
    }
  }
  return false
}

return dfs(k, 0, 0)
};