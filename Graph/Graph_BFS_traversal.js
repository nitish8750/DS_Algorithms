// ajancency list ->> visit neighbours before child nodes

// push root to queue
// mark node as visited
// dequeue from queue
// get neighbours of current node
// if it's not visited push to queue and makr as visited
// queue.length > 0 deuque push to output array add visited neighbour
// queue to implement BFS
// similar to binary tree
// time complexity: T = O(V + E) (vertex + edges) edges  -> to visit neighbours of node --> 
// Spce complexity: S = O(V) --> visited --> number of vertex--> 
/

const adjancencyList = {
  "A": ["B", "F"],
  "B": ["A", "F", "C"],
  "C": ["B", "E", "D"],
  "D": ["C", "E"],
  "E": ["D", "C", "F"],
  "F": ["A", "B", "E"],
}

const travBFS = function(graph, start){
  const output = [];
  const visited = {};
  const queue = [start]; // queue --> array to save
  visited[start] = true;
  let current;
  while(queue.length > 0){
    current = queue.shift();
    output.push(current);
    const neighbours = graph[current];
    for(let i=0; i<neighbours.length; i++){
      const neighbour = neighbours[i];
      if(!visited[neighbour]){
          queue.push(neighbour);
          visited[neighbour] = true;
      }
    }
  }
  return output;
}

console.log(travBFS(adjancencyList, "A"));
