/*
Leetcode number: 392

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by 

deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. 

(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

*/

class Solution {
    public: 
    bool isSubsequence(string s, string t){
        int l1 = s.length(), l2=t.length();
        int i=0, j=0;
        while(i<l1 && j<l2){
            if(s[i]==t[j]){
                ++i;
                ++j;
            }
            else if(s[i] != t[j]){
                ++j;
            }
        }
        return i==l1;
    }
};

//ORRR

class Solution {
public:
    bool isSubsequence(string s, string t) {
        
    int j = 0; // For index of str1 (or subsequence
 
    // Traverse str2 and str1, and
    // compare current character
    // of str2 with first unmatched char
    // of str1, if matched
    // then move ahead in str1
    for (int i = 0; i < t.length() && j < s.length(); i++)
        if (s[j] == t[i])
            j++;
 
    // If all characters of str1 were found in str2
    return (j == s.length());
    }
};