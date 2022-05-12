/*
Leetcode number: 15

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

*/



func threeSum(nums []int) [][]int {
	n := len(nums)
	// Hashmap to store the triplets
	// Helps avoid duplicate triplets
	tripletMap := make(map[[3]int][]int)
	for i := 0; i < n-2; i++ {
		for j := i + 1; j < n-1; j++ {
			for k := j + 1; k < n; k++ {
				triplet := [3]int{nums[i], nums[j], nums[k]}
				sort.Ints(triplet[:])
				
				if nums[i]+nums[j]+nums[k] == 0 {
					tripletMap[triplet] = []int{nums[i], nums[j], nums[k]}
				}
			}
		}
	}

	// Iterate through the hashmap and add the triplets to the result array
	var result [][]int
	for _, triplet := range tripletMap {
		result = append(result, triplet)
	}
	return result
}





/*
Time Complexity: O(n^3) bc the algorithm uses 3 loops to arrive at the result.

Space Complexity: O(k) bc hashmap to store unique triplets. k here is the number of unique triplets with sum = 0 for the given array.

*/