/*
Leetcode number: 759

We are given a list schedule of employees, which represents the working time for each employee.

Each employee has a list of non-overlapping Intervals, and these intervals are in sorted order.

Return the list of finite intervals representing common, positive-length free time for all employees, also in sorted order.

(Even though we are representing Intervals in the form [x, y], the objects inside are Intervals, not lists or arrays. 
  For example, schedule[0][0].start = 1, schedule[0][0].end = 2, and schedule[0][0][0] is not defined).  
  Also, we wouldn't include intervals like [5, 5] in our answer, as they have zero length.

*/

/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
 var employeeFreeTime = function(schedule) {
  if (!schedule || schedule.length === 0) return [];
  
  const merged = schedule.reduce((merged, schedule) => [...merged, ...schedule]);
  merged.sort((a, b) => a.start -b.start); //sort

  const freeTime = [];
  
  let prev = merged[0]
  let start = prev.start
  let end = prev.end;
  for (let i=1; i< merged.length; i++) {
      let current = merged[i];
      
      // checking for overlapping intervals, we know that the prev ending at the same time as current starts in also overlapping since it would mean that there can't be a free time interval between them
      if (end >= current.start) {
          start = Math.min(start, current.start);
          end = Math.max(end, current.end)
      } else {
          freeTime.push(new Interval(end, current.start));
          start = current.start;
          end = current.end;
      }
  }
  return freeTime;
};