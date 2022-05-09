/*
Leetcode number: 723

This question is about implementing a basic elimination algorithm for Candy Crush.

Given an m x n integer array board representing the grid of candy where board[i][j] represents the type of candy. A value of board[i][j] == 0 represents that the cell is empty.

The given board represents the state of the game following the player's move. 
Now, you need to restore the board to a stable state by crushing candies according to the following rules:

If three or more candies of the same type are adjacent vertically or horizontally, crush them all at the same time - these positions become empty.
After crushing all candies simultaneously, if an empty space on the board has candies on top of itself, then these candies will drop until they hit a candy or bottom at the same time. No new candies will drop outside the top boundary.
After the above steps, there may exist more candies that can be crushed. If so, you need to repeat the above steps.
If there does not exist more candies that can be crushed (i.e., the board is stable), then return the current board.
You need to perform the above rules until the board becomes stable, then return the stable board.

*/

/**
 * @param {number[][]} board
 * @return {number[][]}
 */
 var candyCrush = function(board) {
  if (!board)  return board;
  let done = true;
  
  for (let row = 0; row < board.length; row ++) {
    for (let col = 0; col + 2 < board[0].length; col ++) {
      let candy1 = Math.abs(board[row][col]);
      let candy2 = Math.abs(board[row][col + 1]);
      let candy3 = Math.abs(board[row][col + 2]);
      
      if (candy1 && candy1 === candy2 && candy2 === candy3) {
        board[row][col] = board[row][col + 1] = board[row][col + 2] = -candy1;
        done = false;
      }
    }
  }
  for (let col = 0; col < board[0].length; col ++) {
    for (let row = 0; row + 2< board.length; row ++) {
      let candy1 = Math.abs(board[row][col]);
      let candy2 = Math.abs(board[row + 1][col]);
      let candy3 = Math.abs(board[row + 2][col]);

      if (candy1 && candy1 === candy2 && candy2 === candy3) {
        board[row][col] = board[row + 1][col] = board[row + 2][col] = -candy1;
        done = false;
      }
    }
  }
  if (!done) {
    for (let col = 0; col < board[0].length; col ++) {
      let index = board.length - 1; // get to bottom
      for (let row = board.length - 1; row >= 0; row --) {
        if (board[row][col] > 0) {
          board[index][col] = board[row][col];
          index--;
        }
      }
      while (index >= 0) {
        board[index][col] = 0;
        index--;
      }
    }
  }
  return done ? board : candyCrush(board);
};