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
  }

  /**
   * Adds an item to a HashSet.
   * If an item is added, returns 1.
   * If an item is a duplicate returns 0.
   * @param { Any } item 
   */
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
      return 1;
    } else {
      console.log(`Item ${item} is already in the set`);
      return 0;
    }
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
        return returnItem;
      }
    });
    console.log(`Item ${item} is not in the set.`)
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
    console.log(`Item ${item} is not in the set.`)
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
      console.log(`Index is already in the dictionary.`)
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
      console.log(`Index not in dictionary.`)
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
    if (this.container[stringIndex]) {
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
    if (this.container[stringIndex]) {
      return this.container[stringIndex];
    } else {
      console.log(`Index not in dictionary.`)
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

module.exports = AdvancedDataStructures;
