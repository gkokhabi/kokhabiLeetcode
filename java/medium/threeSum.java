/*
Leetcode number: 15

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

*/


class Solution {
  public List<List<Integer>> threeSum(int[] nums) {
      List<List<Integer>> list = new ArrayList();
      if(nums.length < 3){
          return list;
      }   
      Arrays.sort(nums);
      int i = 0;
      while(i < nums.length - 2){
          int target = 0 - nums[i];
          int left = i+1;
          int right = nums.length - 1;

          while(left < right){
              if(nums[left] + nums[right] < target){
                  left++;
                  while(left < nums.length && nums[left] == nums[left - 1]){
                      left++;
                  }
              }else if(nums[left] + nums[right] > target){
                  right--;
                  while(right >= 0 && nums[right] == nums[right + 1]){
                      right--;
                  }
              }else{
                  List<Integer> l = new ArrayList();
                  l.add(0 - target);
                  l.add(nums[left]);
                  l.add(nums[right]);
                  list.add(l);

                  right--;
                  while(right >= 0 && nums[right] == nums[right + 1]){
                      right--;
                  }

                  left++;
                  while(left < nums.length && nums[left] == nums[left - 1]){
                      left++;
                  }
              }
          }
          
          i++;
          while(i < nums.length && nums[i] == nums[i-1]){
              i++;
          }
      }
      return list;
  }
}



/*This has a time complexity of O(n^2) with a space complexity of O(n) */
