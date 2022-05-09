/*
Leetcode number: 37

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.

 */


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
  const n = board.length;
  dfs(board, n);
}

function dfs(board, n) {
  // for every cell in the sudoku
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      // if its empty
      if (board[row][col] !== '.') continue;
      // try every number 1-9
      for (let i = 1; i <= 9; i++) {
        const c = i.toString();
        // if that number is valid
        if (isValid(board, row, col, n, c)) {
          board[row][col] = c;
          // continue search for that board, ret true if solution is reached
          if (dfs(board, n)) return true;
        }
      }
      // solution wasnt found for any num 1-9 here, must be a dead end...
      // set the current cell back to empty
      board[row][col] = '.';
      // ret false to signal dead end 
      return false;
    }
  }
  // all cells filled, must be a solution
  return true;
}

function isValid(board, row, col, n, c) {
  const blockRow = Math.floor(row / 3) * 3;
  const blockCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < n; i++) {
    if (board[row][i] === c || board[i][col] === c) return false;
    const curRow = blockRow +  Math.floor(i / 3);
    const curCol = blockCol +  Math.floor(i % 3);
    if (board[curRow][curCol] === c) return false;
  }
  return true;
}