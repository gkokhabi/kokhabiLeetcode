/*
Leetcode number: 36

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.



*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */

 var isValidSudoku = function(board) {
  const rows = new Array(9).fill().map(() => new Set());
  const cols = new Array(9).fill().map(() => new Set());
  const squares = new Array(9).fill().map(() => new Set());
  
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") continue; // if slot is empty, do nothing
	  
      const val = board[i][j];
	  
	  // get square (0-8)
      const squareIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3); 
      
	  // no duplicate entries
      if (rows[i].has(val) || cols[j].has(val) || squares[squareIndex].has(val)) {
        return false;
      }
      
	  // add number to sets
      rows[i].add(val);
      cols[j].add(val);
      squares[squareIndex].add(val);
    }
  }
  
  return true;
};