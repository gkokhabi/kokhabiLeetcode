//Leetcode number: 3

//Given a string s, find the length of the longest substring without repeating characters.

class Solution {
    public int lengthOfLongestSubstring(String s) {
        if (s.length() == 0) return 0;
        
        int[] count = new int[256];
        for (int i = 0; i < 256; i++) count[i] = -1;
        count[(int) s.charAt(0)] = 0;

        int start = 0;
        int max = 1;
        
        for (int i = 1; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (count[(int) ch] != -1) {
                start = Math.max(start, count[(int) ch]+1); // Math.max because for abba input;
            } 
            
            max = Math.max(max, i-start+1);
            count[(int) ch] = i;
        }
        
        return max;
        
    }
}