#Leetcode Number: 1

#Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

#You may assume that each input would have exactly one solution, and you may not use the same element twice.

#You can return the answer in any order.

class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
    
    def twoSum(self, nums, target):
        required = {}
        for i in range(len(nums)):
            if target - nums[i] in required:
                return [required[target - nums[i]], i]
            else:
                required[nums[i]] = i
        
