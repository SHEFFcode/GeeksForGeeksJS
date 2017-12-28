const AdvancedDataStructures = require('./AdvancedDataStructures');

class TravelingSalesman extends AdvancedDataStructures {
  logItOut() {
    let hashSet = new this.HashSet();
    hashSet.add('hello');
    for (let item of hashSet) {
      console.log(item);
    }
    
    let dictionary = new this.Dictionary();
    dictionary.add('hello', 'there');
    for (let [key, value] of dictionary.iterator()) {
      console.log(key, value);
    }
  }
}

class Index {
  constructor(vertex, setOfVertices) {
    this.vertex = vertex;
    this.setOfVertices = setOfVertices;
  }

}

let travelingSalesman = new TravelingSalesman();
travelingSalesman.logItOut();
