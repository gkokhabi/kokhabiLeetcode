/*
Leetcode number: 632

You have k lists of sorted integers in non-decreasing order. 
Find the smallest range that includes at least one number from each of the k lists.

We define the range [a, b] is smaller than range [c, d] if b - a < d - c or a < c if b - a == d - c.

*/

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
 var smallestRange = function(nums) {
  // we store an index for each list starting at zero
const pointers = Array(nums.length).fill(0)

let minRangeMin = 0
let minRangeMax = 0
let minRange = Number.MAX_VALUE

let isDone = false

while (true) {
 // for every iteration of all the lists, we keep track of these values
 let minListIndex = -1
 let minValue = Number.MAX_VALUE
 let maxValue = Number.MIN_VALUE

 // iterates over each list of numbers
 for (let listIndex = 0; listIndex < nums.length; listIndex++) {
   const list = nums[listIndex]

   // if every element in a list is traversed, we terminate
   if (pointers[listIndex] === list.length) {
     isDone = true
     break
   }

   const value = list[pointers[listIndex]]

   // if the current value is less than the min, we update it
   // along with its index
   if (value < minValue) {
     minListIndex = listIndex
     minValue = value
   }

   // if the current value is greater than the max, we update it
   if (value > maxValue) {
     maxValue = value
   }
 }

 // if any list is exhausted, we cannot improve further
 if (isDone) break

 // advance the pointer for the min
 pointers[minListIndex]++

 // update the min range values
 if ((maxValue - minValue) < minRange) {
   minRangeMin = minValue
   minRangeMax = maxValue
   minRange = maxValue - minValue
 }
}

return [minRangeMin, minRangeMax]
};

/*
Time Complexity:
O(n* k) since we have to loop through n elements of k lists.

Space Complexity:
O(k) since it requires maintaining k pointers/indicies.


Approach

Maintain a pointer for every list that corresponds to current index for that list.
Initialize the pointer of every list to 0 (the first element).
Repeat the following steps until at least one list exhausts:
Find the minimum and maximum value among the current elements of all the lists.
Advance the pointer (index) that points to the current minimum element.
Update the minRange if current (max - min) is less than minRange.


*/



