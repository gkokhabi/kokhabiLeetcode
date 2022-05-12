#Leetcode number: 3

#Given a string s, find the length of the longest substring without repeating characters.



class Solution(object):
    def findLast(self,s,c):
        pos=-1
        i=-1
        for ch in s:
            pos+=1
            if ch==c:
                i=pos
        return i
        
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        sl=['']
        for c in s:
            i=self.findLast(sl[-1],c)
            if i<0:
                sl[-1]+=c
            else:
                sl.append(sl[-1][i+1:]+c)
        return max(map(len,sl))