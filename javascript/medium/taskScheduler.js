/*
Leetcode number: 621

Given a characters array tasks, representing the tasks a CPU needs to do, 
where each letter represents a different task. 
Tasks could be done in any order. Each task is done in one unit of time. 
For each unit of time, the CPU could complete either one task or just be idle.

However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), 
that is that there must be at least n units of time between any two same tasks.

Return the least number of units of times that the CPU will take to finish all the given tasks.


 */

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
 var leastInterval = function(tasks, n) {
  if (n === 0) return tasks.length;
 
   const map = {};
   for (let t of tasks) {
     if (map[t] == null) map[t] = 0;
     map[t]++;
   }
 
   let max = 0;  // task max frequency
   for (let t in map) {
     max = Math.max(max, map[t]);
   }
 
   let count = 0;  // the number of tasks with same max frequency
   for (let t in map) {
     if (map[t] === max) {
       count++;
     }
   }
   return Math.max(
     // case 1
     // AB...AB... = (max - 1) * (n + 1)
     // AB...AB...AB = (max - 1) * (n + 1) + count
     (max - 1) * (n + 1) + count,
       
     // case 2
     // e.g. (ABC)(ABD)(ABEF)
     tasks.length,
   );
 };