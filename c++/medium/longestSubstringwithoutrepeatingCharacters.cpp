/*
Leetcode number: 3

Given a string s, find the length of the longest substring without repeating characters.

*/

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int max=0;
        int const n=s.length();
        set<char> set;
        queue<char> queue;
        
        for(int now=0;now<n;now++){
            if(set.count(s[now]) == 0){
                set.insert(s[now]);
                queue.push(s[now]);
                if(queue.size()>max)   max=queue.size();
            }
            else{
                //same
                while( queue.front() != s[now]){
                    set.erase( queue.front() );
                    queue.pop();
                }
                queue.pop();
                queue.push(s[now]);
            }
         
        }
        return max;
    }
};