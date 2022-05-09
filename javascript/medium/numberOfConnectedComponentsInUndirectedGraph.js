/*
Leetcode number: 323

You have a graph of n nodes. 
You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

Return the number of connected components in the graph.

*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
 var countComponents = function(n, edges) {
  // create visited array
  const visited = [];
  // create graph
  let graph = buildGraph(n, edges);
  // create res
  let res = 0;
  // mark visited with false
  for (let i = 0; i < n; i ++) {
      visited.push(false);
  }
  // traverse graph
  for (let i = 0; i < n; i ++) {
      // not visited
      if (visited[i] === false) {
          res ++;
          dfs(i, graph, visited);
      }
  }
  return res;
};

const buildGraph = (n, edges) => {
  let graph = Array.from({length: n}, () => []);
  for (let edge of edges) {
      let [src, dist] = edge;
      graph[src].push(dist);
      graph[dist].push(src);
  }
  return graph
}

const dfs = (index, graph, visited) => {
  visited[index] = true;
  let nodes = graph[index];
  for (let i = 0; i < nodes.length; i ++) {
      if (visited[nodes[i]] === false) {
          dfs(nodes[i], graph, visited)
      }
  }
}