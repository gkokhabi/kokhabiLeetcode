/*
Leetcode number: 210

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
  let inDegree = new Array(numCourses).fill(0);
  const queue = [];
  const res = [];
  
  for (let [course] of prerequisites) {
      inDegree[course] ++;
  }
  for (let course = 0; course < inDegree.length; course ++) {
      if (inDegree[course] === 0) {
          queue.push(course);
      }
  }
  while (queue.length) {
      let currentCourse = queue.pop();
      numCourses --;
      res.push(currentCourse);
      for (let [course, preq] of prerequisites) {
          if (currentCourse === preq) {
              inDegree[course] --;
              if (inDegree[course] === 0) {
                  queue.push(course)
              }
          }

      }
  }
  return numCourses === 0 ? res : [];
};