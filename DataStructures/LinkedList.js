class LinkedList {
  constructor() {
    this.headNode = new Node();
    this.tailNode = this.headNode;
  }

  addNode(data) {
    if (this.headNode.data == null) {
      this.headNode.data = data;
    } else {
      let nodeToInsert = new Node(data);
      this.tailNode.next = nodeToInsert;
      this.tailNode = nodeToInsert;
    }
  }

  removeNode(value) {
    let currentNode = this.headNode;
    let previousNode = null;

    do {
      if (currentNode.data === value) {
        if (previousNode === null) {
          this.headNode = this.headNode.next;
          this.tailNode = this.headNode;
          break;
        } else {
          previousNode.next = currentNode.next;
          if (previousNode.next === null) {
            this.tailNode = previousNode;
          }
          break;
        }
      } else {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    } while (currentNode !== null);
  }

  traverseLinkedList() {
    let currentNode = this.headNode;
    do {
      if (currentNode.data === null) {
        break;
      } else {
        console.log(currentNode.data);
        currentNode = currentNode.next;
        
      }
    } while (currentNode !== null);
  }
}

class Node {
  constructor(data=null) {
    this.data = data;
    this.next = null;
  }
}