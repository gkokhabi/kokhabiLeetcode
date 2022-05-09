/* 
Leetcode number: 133 

Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
 

Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.


*/

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraph = function(node) {
  const map = new Map();
  return clone(node);
  
  function clone(node) {
    if (!node) return null;
    if (map.has(node.val)) return map.get(node.val);
    
    const newNode = { val: node.val, neighbors: [] };
    map.set(node.val, newNode);
    for (let n of node.neighbors) {
      newNode.neighbors.push(clone(n));
    }
    return newNode;
  }
}