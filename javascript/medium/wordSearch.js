/*
Leetcode number: 79

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.


*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
  if (board.length === 0) return false;

  const numRows = board.length
  const numCols = board[0].length
  const directions = [ /*L*/ [0, -1], /*R*/ [0, 1], /*up*/ [-1, 0], /*dwn*/[1, 0]]

  //recursive function
  function backtrack(row, col, index){
    // return false if current char in board is not current char in word
    if (board[row][col] !== word[index]) return false
    // if we found the last char in word return true
    if (index === word.length - 1) return true

    board[row][col] = '*'; // mark as visited
      
    // check all 4 directions   
    for (let [rowDir, colDir] of directions) {
      const candidateRow = row + rowDir
      const candidateCol = col + colDir
      // check to see if we are in bounds of the board
      if (candidateRow >= 0 && candidateRow < numRows && candidateCol >= 0 && candidateCol < numCols) {
        if (backtrack(candidateRow, candidateCol, index + 1)) return true;
      }
    }
    // reset
    board[row][col] = word[index];
    return false;
  }
    
  // traverse your board  starting at 0, 0
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (backtrack(row, col, 0)) return true
    }
  }
  return false
}