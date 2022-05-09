/*
Leetcode number: 298

Given the root of a binary tree, return the length of the longest consecutive sequence path.

The path refers to any sequence of nodes from some starting node to any node in the tree along the parent-child connections. 
The longest consecutive path needs to be from parent to child (cannot be the reverse).


*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var longestConsecutive = function(root, count = 0, prev = Infinity) {
  if (!root) return count;
  
  let nextCount = (root.val - 1 != prev) ? 0 : count;
  const a = longestConsecutive(root.right, nextCount + 1, root.val);
  const b = longestConsecutive(root.left, nextCount + 1, root.val);
  return Math.max(a, b, count);
};