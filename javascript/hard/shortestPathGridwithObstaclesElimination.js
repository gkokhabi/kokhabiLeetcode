/*
Leetcode number: 1293

You are given an m x n integer matrix grid where each cell is either 0 (empty) or 1 (obstacle). 
You can move up, down, left, or right from and to an empty cell in one step.

Return the minimum number of steps to walk from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1) given that you can eliminate at most k obstacles. 
If it is not possible to find such walk return -1.

*/

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
 var shortestPath = function(grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  if(m === 1 && n === 1)  return 0;
  const obstaclesToReach = [];
  // Intializing blank array
  for(const row of grid){
      obstaclesToReach.push(new Array(row.length));
  }
  obstaclesToReach[0][0] = grid[0][0];
  return bfs(grid, obstaclesToReach, k, m, n);
};

function bfs(grid, obstaclesToReach, k, m, n){
  const directionsToMove = [[0,1],[1,0],[0,-1],[-1,0]];
  // Pushing the start point
  const queue = [[0,0,0,grid[0][0]]];
  while(queue.length){
      const [i,j,level,obstacles] = queue.shift();
      for(const dir of directionsToMove){
          const newI = i + dir[0];
          const newJ = j + dir[1];
          // If new point is valid
          if(newI >= 0 && newJ >= 0 && newI < m && newJ < n){
              const newObstacles = obstacles + grid[newI][newJ];
              // In BFS return the first time we reach end
              if(newI === m - 1 && newJ === n - 1){
                  return level + 1;
              }
              // If new point is reachable per the max obstacles &&
              // point is not visited (obstaclesToReach is undefined) ||
              // newObstacles is less than previous obstacles
              // Note: this conditions drops paths when we surpass k obstacles
              if(newObstacles <= k && 
                 (obstaclesToReach[newI][newJ] === undefined || 
                  obstaclesToReach[newI][newJ] > newObstacles)){
                  // Push the new point for visit
                  queue.push([newI, newJ, level + 1, newObstacles]);
                  obstaclesToReach[newI][newJ] = newObstacles;
              }               
          }
      }    
  }
  return  -1;   
};