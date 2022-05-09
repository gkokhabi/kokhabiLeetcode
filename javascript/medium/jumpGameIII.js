/*
Leetcode number: 1306 

Given an array of non-negative integers arr, you are initially positioned at start index of the array. 
When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach to any index with value 0.

Notice that you can not jump outside of the array at any time.

*/

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
 var canReach = function(arr, start) {
  function callDFS(idx) {
    if(arr[idx] === 'seen' || idx < 0 || idx >= arr.length) return false;
    if(!arr[idx]) return true;
    const move = arr[idx]; arr[idx] = 'seen';
    return callDFS(idx - move) || callDFS(idx + move);
}
return callDFS(start);  
};