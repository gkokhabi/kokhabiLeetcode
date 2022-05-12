/*
Leetcode number: 9 

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
*/



func isPalindrome(x int) bool {
	var reversedNum int
	tmp := x
	for tmp > 0 {
			reversedNum = reversedNum*10 + tmp%10
			tmp =tmp/10
	}
	return x == reversedNum
}
