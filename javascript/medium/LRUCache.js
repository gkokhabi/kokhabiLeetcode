/*
Leetcode number: 146 

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.




*/

/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.cache = new Map();
};
/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if (!this.cache.has(key)) return -1;
  const value = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, value);
  return value;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  this.cache.delete(key);
  this.cache.set(key, value);
  if (this.cache.size > this.capacity) 
      this.cache.delete(this.cache.keys().next().value);
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/