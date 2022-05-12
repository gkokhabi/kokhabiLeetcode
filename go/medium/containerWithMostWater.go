/*
Leetcode number: 11

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.


*/

func maxArea(height []int) int {
	n := len(height)

	var result int

	for left := 0; left < n-1; left++ {
		for right := left + 1; right < n; right++ {
			currArea := min(height[left], height[right]) * (right - left) // min height * width
			result = max(result, currArea)
		}
	}
	return result
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}