/*
Leetcode number: 208 

A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

*/

var Trie = function() {
  this.trie = {}; 
};

/** 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let cur = this.trie;
  for(let alpha of word){
      if(!cur[alpha]) cur[alpha] = {};
      cur = cur[alpha];
  }
  cur.word = word;
};

/** 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  let cur = this.trie;
  for(let alpha of word){
      if(! cur[alpha]) return false;
      if(cur[alpha].word === word) return true
      cur = cur[alpha];
  }        
  return false
};

/** 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  let cur = this.trie;
  for(let alpha of prefix){
      if(!cur[alpha] ) return false;
      cur = cur[alpha];
  }
  return true;
};

/** 
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/