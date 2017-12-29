/**
 * @version 1.0
 * @author Jeremy Shefer
 */


/*==================================================================================================
                      Main class which can be exported and extended
 =================================================================================================*/
class AdvancedDataStructures {
  constructor() {
    this.HashSet = HashSet;
    this.CustomKeyDictionary = CustomKeyDictionary;
    this.Stack = Stack;
    this.Matrix = Matrix;
  }
}

/*==================================================================================================
                                          HashSet
 =================================================================================================*/

/**
 * Data Structure that only allows one-of-a-kind elements
 */
class HashSet {
  constructor() {
    this.container = [];
    this.length = 0;
  }

  /**
   * Sorts the HashSet by length
   */
  sort() {
    this.container.sort((x, y) => x.length - y.length)
  }

  /**
   * Adds an item to a HashSet.
   * If an item is added, returns 1.
   * If an item is a duplicate returns 0.
   * @param { Any } item 
   */
  add(item) {
    let newItem = true;
    for (let element of this.container) {
      if (item == element) {
        newItem = false;
        return;
      }
    };
    if (newItem) {
      this.container.push(item);
      this.container.sort();
      this.length++;
      return 1;
    } else {
      // console.log(`Item ${item} is already in the set`);
      return 0;
    }
  }

  /**
   * Accepts another HashSet as a parameter.
   * Returns a copy of the given HashSet.
   * @param { HasSet } hashSet 
   */
  createCopy() {
    let newHashSet = new HashSet();
    for (let item of this.container) {
      newHashSet.add(item);
    }
    return newHashSet;
  }

  /**
   * Checks if the item is in the HashSet.
   * Returns true if it is.
   * Returns false if it is not.
   * @param { Any } item 
   */
  contains(item) {
    for (let element of this.container) {
      if (item === element) {
        return true;
      }
    }
    return false;
  }

  /**
   * Removes an item from a HashSet.
   * If an item was there and was removed, returns the item.
   * If an item was not there, logs this fact and returns null.
   * @param { Any } item 
   */
  remove(item) {
    this.container.forEach((element, index) => {
      if (item == element) {
        let returnItem = element;
        this.container.splice(index, 1);
        this.length--;
        return returnItem;
      }
    });
    // console.log(`Item ${item} is not in the set.`)
    return null;
  }

  /**
   * Retrieves an item from a HashSet. (Without removing)
   * If an item was there and was retrieved, returns the item.
   * If an item was not there, logs this fact and returns null.
   * @param { Any } item 
   */
  retrieve(item) {
    this.container.forEach((element, index) => {
      if (item == element) {
        let returnItem = element;
        return returnItem;
      }
    });
    // console.log(`Item ${item} is not in the set.`)
    return null;
  }

  // *iterator() {
  //   for (let i = 0; i < this.container.length; i++) {
  //     let value = this.container[i];
  //     yield value;
  //   }
  // }

  /**
   * Iterator function to iterate over the set via for (let item of items) loop.
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
   */
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

/*==================================================================================================
                                        Custom Key Dictionary
 =================================================================================================*/
/**
 * Dictionary that can accept a custom object as a key
 */
 class CustomKeyDictionary {
  constructor() {
    this.container = {};
  }

  /**
   * Adds the key value pair to the dictionary.
   * Returns 1 if added.
   * Returns 0 if item is already in the dictionary.
   * @param { Any } index 
   * @param { Any } value 
   */
  add(index, value) {
    let stringIndex = JSON.stringify(index);
    if (!this.container[stringIndex]) {
      this.container[stringIndex] = value;
      return 1;
    } else {
      // console.log(`Index is already in the dictionary.`)
      return 0;
    }
  }

  /**
   * Removes the key and value from the dictionary.
   * Returns the value if successfull.
   * Returns null if item with index is not in dictionary.
   * @param { Any } index 
   */
  remove(index) {
    let stringIndex = JSON.stringify(index);
    if (this.container[stringIndex]) {
      let returnValue = this.container[stringIndex];
      delete this.container[stringIndex];
      return returnValue;
    } else {
      // console.log(`Index not in dictionary.`)
      return null;
    }
  }

  /**
   * Checks if an item with index is in the dictionary.
   * Returns true if contains.
   * Returns false if does not contain.
   * @param { Any } index 
   */
  contains(index) {
    let stringIndex = JSON.stringify(index);
    if (this.container[stringIndex] != undefined || this.container[stringIndex] != null) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Retrieves the value for key from the dictionary.
   * Returns the value if successfull.
   * Returns null if item with index is not in dictionary.
   * @param { Any } index 
   */
  retrieve(index) {
    let stringIndex = JSON.stringify(index);
    if (this.container[stringIndex] != undefined || this.container[stringIndex] != null) {
      return this.container[stringIndex];
    } else {
      // console.log(`Index not in dictionary.`)
      return null;
    }
  }

  /**
   * Iterator function to iterate over the set via for (let item of items) loop.
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
   */
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

/*==================================================================================================
                                              Stack
 =================================================================================================*/
 class Stack {
   constructor() {
     this.container = [];
   }

   /**
    * Pushes an item onto the stack.
    * @param { Any } item 
    */
   push(item) {
    this.container.push(item);
   }

   /**
    * Pops the item from the Stack and returns it.
    */
   pop() {
    return this.container.pop();
   }

  /**
   * Iterator function to iterate over the set via for (let item of items) loop.
   * See MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
   */
  [Symbol.iterator]() {
    let index = -1;
    return {
      next: () => {
        let indexNow = ++index;
         return {
           value: this.container[this.container.length - 1 - indexNow],
           done: !(indexNow in this.container)
          }
        }
    };
  }
 }

 /*==================================================================================================
                                          Matrix
 =================================================================================================*/
class Matrix {
  constructor(depth, length) {
    let container = [];
    for (let i = 0; i <= depth; i++) {
      container[i] = [];
      for (let j = 0; j <= length; j++) {
        container[i][j] = null;
      }
    }
    return container;
  }
}
module.exports = AdvancedDataStructures;
