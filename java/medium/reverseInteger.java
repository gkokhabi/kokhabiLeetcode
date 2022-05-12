/*
Leetcode number: 7

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

*/

class Solution {
  public int reverse(int x) {
      // signMultiplier = -1 for negative numbers
      // signMultiplier = 1 for positive numbers
      int signMultiplier = 1;
      if (x < 0) {
          signMultiplier = -1;
          x = signMultiplier * x;
      }

      int res = 0;
      while (x > 0) {

          // Check if the result is within MaxInt32 and MinInt32 bounds
          if (res * signMultiplier > Integer.MAX_VALUE / 10 || res * signMultiplier < Integer.MIN_VALUE / 10) {
              return 0;
          }
          // Add the current digit into result
          res = res * 10 + x % 10;

          x = x / 10;
      }
      // Restore to original sign of number (+ or -)
      return (int)(signMultiplier * res);
  }
}