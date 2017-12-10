module.exports = class DitkasAlgo {
  run(graph, startVertex) {
    let len = graph.length;
    minDistArr = [];
    shortestPathSetToVertexArr = [];

    for (let i = 0; i < len; i++) {
      minDistArr[i] = 255;
      shortestPathSetToVertexArr[i] = false;
    }

    minDistArr[startVertex] = 0;

    for (let row = 0; row < len - 1; row++) {
      minDistanceIndex = this._calcMinDistance(minDistArr, shortestPathSetToVertexArr);
      shortestPathSetToVertexArr[minDistanceIndex] = true;
      for (let columnVertex = 0; columnVertex < len; columnVertex ++) {
        if (
            shortestPathSetToVertexArr[columnVertex] !== true 
            && graph[minDistanceIndex][columnVertex] !== 0
            && minDistArr[minDistanceIndex] !== 255
            && minDistArr[minDistanceIndex] + graph[minDistanceIndex][columnVertex] < minDistArr[columnVertex]
          ) 
        {
          minDistArr[columnVertex] = minDistArr[minDistanceIndex] + graph[minDistanceIndex][columnVertex];
        }
      }
      this._printSolution(minDistArr);
    }
  }

  _calcMinDistance(minDistArr, shortestPathSetToVertexArr) {
    minValue = 255;
    minIndex = -1;

    for (let vertex = 0; vertex < minDistArr.length; vertex++) {
      if (shortestPathSetToVertexArr[vertex] === false && minDistArr[vertex] < minValue) {
        minValue = minDistArr[vertex];
        minIndex = vertex;
      }
    }
    return minIndex;
  }

  _printSolution(minDistArr) {
    console.log('Distance from the vertex is: ');
    for (let vertex = 0; vertex < minDistArr.length; vertex++) {
      console.log(`To ${vertex} is ${minDistArr[vertex]}`);
    }
  }
}