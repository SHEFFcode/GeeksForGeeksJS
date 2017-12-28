class AdvancedDataStructures {
  constructor() {
    this.HashSet = HashSet;
    this.Dictionary = Dictionary;
  }
}

class HashSet {
  constructor() {
    this.container = [];
  }

  add(item) {
    let newItem = true;
    this.container.forEach(element => {
      if (item == element) {
        newItem = false;
        return;
      }
    });
    if (newItem) {
      this.container.push(item);
    } else {
      console.log(`Item ${item} is already in the set`);
    }
  }

  remove(item) {
    this.container.forEach((element, index) => {
      if (item == element) {
        let returnItem = element;
        this.container.splice(index, 1);
        return returnItem;
      }
    });
    console.log(`Item ${item} is not in the set.`)
  }

  retrieve(item) {
    this.container.forEach((element, index) => {
      if (item == element) {
        let returnItem = element;
        return returnItem;
      }
    });
    console.log(`Item ${item} is not in the set.`)
  }

  // *iterator() {
  //   for (let i = 0; i < this.container.length; i++) {
  //     let value = this.container[i];
  //     yield value;
  //   }
  // }

  [Symbol.iterator]() {
    let index = -1;
    return {
      next: () => {
         return {
           value: this.container[++index],
           done: !(index in this.container)
          }
        }
    };
  }
}

class Dictionary {
  constructor() {
    this.container = {};
  }

  add(index, value) {
    if (this.container[index]) {
      return false;
    } else {
      this.container[index] = value;
      return true;
    }
  }

  remove(index) {
    if (this.container[index]) {
      let returnValue = this.container[index];
      delete this.container[index];
      return returnValue;
    } else {
      console.log(`Index ${index} not in dictionary.`)
    }
  }

  retrieve(index) {
    if (this.container[index]) {
      return this.container[index];
    } else {
      console.log(`Index ${index} not in dictionary.`)
    }
  }
}

module.exports = AdvancedDataStructures;
