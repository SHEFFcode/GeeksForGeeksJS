class BinarySearchTree {
  constructor() {
    this.root = null; // set the initial root to be null initially
    this.size = 0; // size starts out at 0
  }

  insert(value) {
    if (this.root === null) { // if the root node is 0, and the tree is empty
			this.root = new Node (value); // create a new node from the value passed into the function
			this.size++; // increase the size of the binary search tree object
		} else { // thre tree is not empty
			this._findAndInsert(this.root); // Call the recursive function on the root node
			this.size++; // increse the size proprty of the BST object by 1
		}
  }

  _findAndInsert(currentNode) { // a recursive function that will find where to put in the new node
    if (value > currentNode.value) { // compare the value of the insert func to the value of the node passed in
      if (currentNode.rightChild === null) { // right child property of the current node is null
        currentNode.rightChild = new Node(value); // create a new node and place it into the right child
      } else { // if there is already a right child
        findAndInsert(currentNode.rightChild); // do a recursive call to see where else to put in new node
      }
    } else if (value < currentNode.value) { // compare the value of insert func to value of node passed in
      if (currentNode.leftChild === null) { // the left child does not exist, we can put new node here
        currentNode.leftChild = new Node(value); // create a new node and place it where it belongs
      } else {
        findAndInsert(currentNode.leftChild); // do a recursive call to see where else to put in new node
      }
    }
  }

  search(target) {
    var check = false; // initialize a check value that we will return
		this._traverse(this.root); // call traverse on the root node, that is where our search will begin
		return check; // return the bool of yes no if the value searched is in our search tree
  }

  _traverse(currentNode) { // function that will recursively travel down our tree
    if (currentNode === null) { // we came all the way to the bottom of the search tree and did not find a value
      return; // return out of this recursive call
    } else if (currentNode.value === target) { // if we find a node with the target value
      check = true; // set check to true
      return; // return out of any further recrusive calls
    }
    if (target > currentNode.value) { // number we are looking for is on the right side
      traverse(currentNode.rightChild); // call the recursive method on the right child
    } else if (target < currentNode.value) { // target value will exist on the left child side
      traverse(currentNode.leftChild); // call the recursive method on the left child
    }
  }

  delete(deleteValue) {
    var temp = []; // capture all the values of the search tree besides the delete value
		
		this._roundUp(this.root); // call the recursive function on the root node
		if (temp.length === this.size) { // if the temp array has as many elements as we started with
			console.log('Delete value '+ deleteValue +' does not exist inside our tree.'); // delete value is not in tree
		} else {
			this.root = null;  // reset root to null to reinsert the values back into the array
			this.size = 0; // reset size to 0, size will be auto incremented by the insert method
			var toInsert;
			for (var i = 0; i < temp.length; i ++) { // reinsertion loop
				toInsert = temp[i]; // each of the values we want to reinsert
				this.insert(toInsert); // we are calling our insert method and passing in the value we want to insert back in
			}
			console.log('Delete value ' + deleteValue + ' has been removed.'); // message back to the user
		}
		
		console.log(this.root);
		console.log(this.size);
		return; // terminates the function
  }

  _roundUp(currentNode) { // recursive function to find all the values aside from the delete value
    if (currentNode === null) { // if we have reached the bottom of the tree, we just want to return out of the call
      return;
    }
    if (currentNode.value !== deleteValue) { // if current node's value is not the delete value
      temp.push(currentNode.value); // push the current node's value into the array
    }
    roundUp(currentNode.leftChild); // recursive call on the left child
    roundUp(currentNode.rightChild); // recrusive call on the right child
  }
}



class Node {
  constructor() {
    this.value = value; // value property will be equal to the input of the constructor function
    this.leftChild = null; // left child will initially be null
    this.rightChild = null; // right child will initially be null
  }
}