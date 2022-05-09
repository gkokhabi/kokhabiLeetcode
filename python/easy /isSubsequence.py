#Leetcode number: 392

# Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

# A subsequence of a string is a new string that is formed from the original string by 

# deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. 

# (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if len(s)>len(t):
            return False
        if not s:
            return True  
        if s[0] in t:
            print("yes")
            return self.isSubsequence(s[1:], t[t.index(s[0])+1:])
        else:
            return False