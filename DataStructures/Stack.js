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