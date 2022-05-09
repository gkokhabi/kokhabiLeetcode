/*
Leetcode number: 392

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by 

deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. 

(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

*/

// Strategy:
// * map s and t into arrays: sMap and tMap
// * keep track of an iterator for sMap
// * scan through tMap
// * whenever we run into the letter that the iterator for sMap points to, move up the iterator
// * at the end of the scan through tMap, if the iterator == sMap.count, then return true; otherwise return fale


class Solution {
    func isSubsequence(_ s: String, _ t: String) -> Bool {
        if s.count == 0 {
            return true
        }
        if s.count > t.count {
            return false
        }
        
        let sMap = s.map { String($0) }
        let tMap = t.map { String($0) }
        
        var sIterator = 0
        var sLetter = sMap[sIterator]

        for tLetter in tMap {
            if tLetter == sLetter {
                sIterator += 1
                if sIterator == sMap.count {
                    return true
                } else {                
                    sLetter = sMap[sIterator]
                }
            }
        }
        
        return false
    }
}

// ~ O(n) time
// ~ O(n) space