/*
Leetcode number: 710

You are given an integer n and an array of unique integers blacklist. Design an algorithm to pick a random integer in the range [0, n - 1] that is not in blacklist. Any integer that is in the mentioned range and not in blacklist should be equally likely to be returned.

Optimize your algorithm such that it minimizes the number of calls to the built-in random function of your language.

Implement the Solution class:

Solution(int n, int[] blacklist) Initializes the object with the integer n and the blacklisted integers blacklist.
int pick() Returns a random integer in the range [0, n - 1] and not in blacklist.
*/

/**
 * @param {number} n
 * @param {number[]} blacklist
 */
 var Solution = function(n, blacklist) {
  this.count = n - blacklist.length;
  this.lastMappingIndex = n - 1;
  this.map = Object.create(null);
  for (let num of blacklist) {
      this.map[num] = null;
  }  
};

/**
* @return {number}
*/
Solution.prototype.pick = function() {
  let num; 
  while (this.map[(num = Math.random() * this.count >> 0)] !== undefined) {
      if (this.map[num] === null) {
          while (this.map[this.lastMappingIndex] !== undefined) {
              this.lastMappingIndex--;
          }  
          this.map[num] = this.lastMappingIndex--;
      }
      return this.map[num];
  }
  return num;
};

/** 
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(n, blacklist)
* var param_1 = obj.pick()
*/