/*
Leetcode number: 8

Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.


*/


func myAtoi(s string) int {
	// Remove any additional spaces before and after the given string
	s = strings.Trim(s, " ")

	n := len(s)
	// If string is empty return 0
	if n == 0 {
		return 0
	}

	// String index from where the processing should start
	var start int

	// Handling numbers with +/- sign
	signMultiplier := 1
	if s[0] == '-' {
		// Handling for negative numbers
		signMultiplier = -1
		start = 1
	} else if s[0] == '+' {
		// Handling for signed positive number
		start = 1
	}

	// ASCII of '0' = 48
	// s[i] - '0' gives the actual number as an integer
	var res int
	for i := start; i < len(s); i++ {
		// Handling for non numeric values
		if !(s[i] >= '0' && s[i] <= '9') {
			return res * signMultiplier
		}

		// Calculate the result for current iteration
		res = res*10 + int(s[i]-'0')

		// Check if result exceeds MinInt32 or MaxInt32
		if res*signMultiplier <= math.MinInt32 {
			return math.MinInt32
		} else if res*signMultiplier >= math.MaxInt32 {
			return math.MaxInt32
		}
	}
	return res * signMultiplier
}


