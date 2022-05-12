/*
Leetcode number: 3

Given a string s, find the length of the longest substring without repeating characters.

*/


func lengthOfLongestSubstring(s string) int {
	n := len(s)

	// String with one character is always unique, return 1
	if n == 1 {
		return 1
	}

	var result int
	for start := 0; start < n-1; start++ {
		for end := start; end < n; end++ {
			// Hashmap to store characters of the current substring
			// Needed to check if all the characters are unique or if it contains duplicates
			characterMap := make(map[uint8]bool)

			// True if substring contains all unique characters
			// False if it contains duplicates
			isUniqueSubstring := true

			// Loop to check if the current substring contains unique characters or has duplicates
			for i := start; i <= end; i++ {
				if _, isPresent := characterMap[s[i]]; !isPresent {
					characterMap[s[i]] = true
					continue // continue to next character in the substring
				}

				// substring contains duplicates
				isUniqueSubstring = false
				break
			}

			// If the current substring has all unique characters
			// Update result if current substring length is greater than result so far
			if isUniqueSubstring {
				result = max(result, end-start+1)
			}
		}
	}
	return result
}

// max returns the max of num1 and num2
func max(num1, num2 int) int {
	if num1 > num2 {
		return num1
	}
	return num2
}



//pretty sure time complexity is On3
//space O(1) - meh