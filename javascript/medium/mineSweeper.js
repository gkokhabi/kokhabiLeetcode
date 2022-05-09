/*
Leetcode number: 529

Let's play the minesweeper game (Wikipedia, online game)!

You are given an m x n char matrix board representing the game board where:

'M' represents an unrevealed mine,
'E' represents an unrevealed empty square,
'B' represents a revealed blank square that has no adjacent mines (i.e., above, below, left, right, and all 4 diagonals),
digit ('1' to '8') represents how many mines are adjacent to this revealed square, and
'X' represents a revealed mine.
You are also given an integer array click where click = [clickr, clickc] represents the next click position among all the unrevealed squares ('M' or 'E').

Return the board after revealing this position according to the following rules:

If a mine 'M' is revealed, then the game is over. You should change it to 'X'.
If an empty square 'E' with no adjacent mines is revealed, then change it to a revealed blank 'B' and all of its adjacent unrevealed squares should be revealed recursively.
If an empty square 'E' with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.
Return the board when no more squares will be revealed.

*/

/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
 var updateBoard = function(board, click) {
  dfs(click[0], click[1], board);
  return board;
}

function dfs(i, j, board) {
  let directions = [[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,-1],[-1,1]]
  let rows = board.length, cols = board[0].length;
  if (i<0 || j<0 || i>=rows || j>=cols || !board[i][j]) return
    
  if (board[i][j] === 'M') {
    board[i][j] = 'X';
    return;
  }
  if (board[i][j] !== 'E') return;

  const mines = checkForMine(i, j, rows, cols, board);

  if (mines) {
    board[i][j] = mines.toString();
    return;
  } else {
    board[i][j] = 'B';
    for (let dir of directions) dfs(i+dir[0], j+dir[1], board)
    }
}

function checkForMine(x, y, rows, cols, board) {
  let mines = 0;
  for (let i = Math.max(x - 1, 0); i < Math.min(x + 2, rows); i++) {
    for (let j = Math.max(y - 1, 0); j < Math.min(y + 2, cols); j++) {
      if (board[i][j] === 'M') mines++;
    }
  }
  return mines;
}