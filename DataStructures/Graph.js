const LinkedList = require('./LinkedList');

class Graph {
  constructor(vertexCount) {
    this.vertexCount = vertexCount;
    this.adjList = [];
    for (let i = 0; i < vertexCount; i++) {
      adjList[i] = new LinkedList();
    }
  }

  addEdge(from, to) {
    adjList[from].addNode(to);
    adjList[to].addNode(from);
  }

  removeEdge(from, to) {
    adjList[from].removeNode(to);
    adjList[to].removeNode(from);
  }
}

class GraphMatrix {
  constructor(vertexCount) {
    this.vertexCount = vertexCount;
    this.adjMatrix = [[]];
  }

  addEdge(from, to) {
    this.adjMatrix[from][to] = 1;
    this.adjMatrix[to][from] = 1;
  }

  removeEdge(from, to) {
    this.adjMatrix[from][to] = 0;
    this.adjMatrix[to][from] = 0;
  } 
}

module.exports = Graph;