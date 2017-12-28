class AdvancedDataStructures {
  constructor() {
    this.HashSet = HashSet;
    this.CustomKeyDictionary = CustomKeyDictionary;
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

class CustomKeyDictionary {
  constructor() {
    this.container = {};
  }

  add(index, value) {
    let stringIndex = JSON.stringify(index);
    if (!this.container[stringIndex]) {
      this.container[stringIndex] = value;
    } else {
      console.log(`Index is already in the dictionary.`)
    }
  }

  remove(index) {
    let stringIndex = JSON.stringify(index);
    if (this.container[stringIndex]) {
      let returnValue = this.container[stringIndex];
      delete this.container[stringIndex];
      return returnValue;
    } else {
      console.log(`Index not in dictionary.`)
      return null;
    }
  }

  contains(index) {
    let stringIndex = JSON.stringify(index);
    if (this.container[stringIndex]) {
      return true;
    } else {
      return false;
    }
  }

  retrieve(index) {
    let stringIndex = JSON.stringify(index);
    if (this.container[stringIndex]) {
      return this.container[stringIndex];
    } else {
      console.log(`Index not in dictionary.`)
      return null;
    }
  }

  [Symbol.iterator]() {
    let keys = Object.keys(this.container);
    let index = -1;
    return {
      next: () => {
        index = ++index;
         return {
           value: {key: keys[index], value: this.container[keys[index]]},
           done: !(index in keys)
          }
        }
    };
  }
}

module.exports = AdvancedDataStructures;
