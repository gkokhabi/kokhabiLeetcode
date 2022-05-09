/*
Leetcode number: 277 

Suppose you are at a party with n people labeled from 0 to n - 1 and among them, there may exist one celebrity. The definition of a celebrity is that all the other n - 1 people know the celebrity, but the celebrity does not know any of them.

Now you want to find out who the celebrity is or verify that there is not one. The only thing you are allowed to do is ask questions like: "Hi, A. Do you know B?" to get information about whether A knows B. You need to find out the celebrity (or verify there is not one) by asking as few questions as possible (in the asymptotic sense).

You are given a helper function bool knows(a, b) that tells you whether A knows B. Implement a function int findCelebrity(n). There will be exactly one celebrity if they are at the party.

Return the celebrity's label if there is a celebrity at the party. If there is no celebrity, return -1.

*/

/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
 var solution = function(knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function(n) {
  // the real celebrity does not know anyone 
// set our current celebrity to be the first person
  let celebrity = 0;
  for (let i = 1; i < n; i++) {
// if the current celebrity knows i, current celebrity can't be the celebrity 
      if (knows(celebrity, i)) {
  // i could be the next celebrity candidate
          celebrity = i;
      }
  // if current celebrity does not know i, implictly we also know i can't be the celebrity
  }
// check again to make sure this celebrity is real
  for (let i = 0; i < n; i++) {
// the real celebrity does not know anyone, but everyone knows the celebrity
      if (i != celebrity && (knows(celebrity, i) || !knows(i, celebrity))) {
          return -1;
      }
  }
  return celebrity;  
  };
};