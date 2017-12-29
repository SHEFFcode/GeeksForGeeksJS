const AdvancedDataStructures = require('./AdvancedDataStructures');

class TravelingSalesman extends AdvancedDataStructures {
  
  minCost(graph) {
    var minCostDictionary = new this.CustomKeyDictionary();
    var parentVertexDictionary = new this.CustomKeyDictionary();

    var allPossibleSets = this.generateAllPossibleSets(graph);

    for (let currentSet of allPossibleSets) {
      for (let currentVertex = 1; currentVertex < graph.length; currentVertex++) {
        if (currentSet.contains(currentVertex)) {
          continue;
        }

        var index = new Index(currentVertex, currentSet);
        var minCostValue = Number.MAX_SAFE_INTEGER;
        var minPreviousIndex = 0;
        var copySet = currentSet.createCopy();

        for (let prevVertex of currentSet) {
          let cost = graph[prevVertex][currentVertex] + this.getCost(copySet, prevVertex
            , minCostDictionary);
          
          if (cost < minCostValue) {
            minCostValue = cost;
            minPreviousIndex = prevVertex;
          }
        }

        if (currentSet.length === 0) {
          minCostValue = graph[0][currentVertex];
        }

        minCostDictionary.add(index, minCostValue);
        parentVertexDictionary.add(index, minPreviousIndex);
        
      }
    }

    var setToZero = new this.HashSet();
    for (let i = 1; i < graph.length; i++) {
      setToZero.add(i);
    }
    var min = Number.MAX_SAFE_INTEGER;
    var previousVertex = -1;

    var copyOfSetToZero = setToZero.createCopy();

    for (let vertex of setToZero) {
      let cost = graph[vertex][0] + this.getCost(copyOfSetToZero, vertex, minCostDictionary);
      if (cost < min) {
        min = cost;
        previousVertex = vertex;
      }
    }
    parentVertexDictionary.add(new Index(0, setToZero), previousVertex);

    this.printTour(parentVertexDictionary, graph.length);
    console.log(`Minimum travel cost is ${min}`);

    return min;
  }

  printTour(parentVertexDictionary, len) {
    var tourSet = new this.HashSet();
    for (let i = 0; i < len; i++) {
      tourSet.add(i);
    }

    let start = 0;
    let stack = new this.Stack();

    while (true) {
      stack.push(start);
      tourSet.remove(start);

      var key = new Index(start, tourSet);

      if (parentVertexDictionary.contains(key)) {
        start = parentVertexDictionary.retrieve(key);
      } else {
        break;
      }
    }

    var output = '';
    for (let item of stack) {
      output += `${item} -> `;
    }

    output = output.substring(0, output.length - 3);

    console.log(output);
    
  }

  getCost(copySet, prevVertex, minCostDictionary) {
    copySet.remove(prevVertex);
    
    var index = new Index(prevVertex, copySet);
    var cost = 0;
    if (minCostDictionary.contains(index)) {
      cost = minCostDictionary.retrieve(index);
    }

    copySet.add(prevVertex);
    return cost;
  }

  generateAllPossibleSets(graph) {
    var input = [];
    var output = [];
    for (let i = 0; i < graph.length - 1; i++) {
      input[i] = i + 1;
    }

    var allPossibleSets = new this.HashSet();
    this.createAllPossibleSets(input, output, 0, 0, allPossibleSets);
    allPossibleSets.sort();
    return allPossibleSets;
  }

  createAllPossibleSets(input, output, start, pos, allPossibleSets) {
    if (pos === input.length) {
      return;
    }
    var currentSet = this.createCurrentSet(output, pos);

    allPossibleSets.add(currentSet);

    for (let i = start; i < input.length; i++) {
      output[pos] = input[i];
      this.createAllPossibleSets(input, output,i + 1, pos + 1, allPossibleSets);
    }
  }

  createCurrentSet(output, pos) {
    if (pos === 0) {
      return new this.HashSet();
    }

    var currentSet = new this.HashSet();

    for (let i = 0; i < pos; i++) {
      currentSet.add(output[i]);
    }

    return currentSet;
  }

}

class Index {
  constructor(vertex, setOfVertices) {
    this.vertex = vertex;
    this.setOfVertices = setOfVertices;
  }

}

module.exports = TravelingSalesman;