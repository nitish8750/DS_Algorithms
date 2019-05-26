class Graph {
    constructor(){
        this.adjancyList = {};
    }
    addVertex(vertex){
        if(!this.adjancyList[vertex]) this.adjancyList[vertex] = [];
    }
    addEdge(v1, v2){
        this.adjancyList[v1].push(v2);
        this.adjancyList[v2].push(v1);
    }
    removeEdge(v1, v2){
        this.adjancyList[v1] = this.adjancyList[v1].filter(v => v !== v2);
        this.adjancyList[v2] = this.adjancyList[v1].filter(v => v !== v1);
    }
    removeVertex(vertex){
        while(this.adjancyList[vertex].length){
            let adjacentVertex = this.adjancyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjancyList[vertex];
    }
    DFSRecursive(start){
        let results = [];
        let visited = {};
        let adjancyList = this.adjancyList;

        (function DFS (vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            results.push(vertex);
            adjancyList[vertex].forEach(neighbr => {
                if(!visited[neighbr]){
                    DFS(neighbr);
                }
            })
        })(start);
        return results;
    }
    DFSIterative(start){
        let stack = [start];
        let result = [];
        let visited = {};
        let currentVertex;
        
        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjancyList[currentVertex].forEach(neighbr => {
                if(!visited[neighbr]){
                    visited[neighbr] = true;
                    stack.push(neighbr);
                }
            })
        }
        return result;
    }
    BFSIterative(start){
        let queue = [start];
        let result = []
        let visited = {};
        let currentVertex;
        
        visited[start] = true;
        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjancyList[currentVertex].forEach(neighbr => {
                if(!visited[neighbr]){
                    visited[neighbr] = true;
                    queue.push(neighbr);
                }
            });
        }
        return result;
    }
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g.DFSRecursive("A"));
console.log(g.DFSIterative("A"));
console.log(g.BFSIterative("A"));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F