class HashTable {
  constructor() {
    this.storage = [];
    this.buckets = 8;
    this.size = 0;
  }

  hash(string) {
    let hash = 5381;
		for (let i = 0; i < str.length; i++) {
			char = str.charCodeAt(i);
			hash = ((hash << 5) + hash) + char;
		}
		return hash % this.buckets;
  }

  insert(key, value) {
    var index = this.hash(key); // run the key through the hashing function to find its hashed index
		if (this.storage[index] === undefined) { // check if there is anything in the storage bucket at index
			this.storage[index] = []; // make that value an empty array, usually this is a linked list
			this.storage[index].push([key, value]); // we are adding a touple to this location in the bucket
			this.size++; // increase the size of the hash table after insertion
		} else { // we now go into a situation where we do have an intem in the bucket
			var bucket = this.storage[index]; // create a quick variable that will reference the outer bucket array of touples
			for (var i = 0; i < bucket.length; i++) { // iterate over the bucket arra
				if (bucket[i][0] === key) { // if the key (which is what zeroth element refers to)
					bucket[i][1] = value; // the value of the matching key will be updated to the input value
					return; // there is nothing else to be done here
				}
			}
			bucket.push([key, value]); // if we make it through the for loop without finding the key, we will push our pair
			this.size++; // increase the size of the hash table
		}
  }

  delete(key) {
    var index = this.hash(key); // find index of a bucket where potentially our key value pair is located
		if (this.storage[index] === undefined) { // if there is nothing in that bucket
			console.log('key not found');
			return;
		} else { // if ther are values in this bucket
			var bucket = this.storage[index]; // make a bucket variable to make things a bit easier
			for (var i = 0; i < bucket.length; i++) { // iterate through the values in the bucket
				if (bucket[i][0] === key) { // the key in a tuple is euqal to the key we are trying to delete
					var temp = bucket[i][1]; // capture the value of the key we are deleting
					bucket.splice(i, 1); // we are removing a single array at index i
					this.size--; // reduce the size of the hash table
					return temp; // return the deleted element
				}
			}
		}
		console.log('Key ' + key + ' does not exit!'); // if we make it through the loop and do not find the value
  }

  retrieve(key) {
    var index = this.hash(key); // find index of a bucket where potentially our key value pair is located
		if (this.storage[index] === undefined) { // if there is nothing in that bucket
			console.log('key not found');
			return;
		} else { // if ther are values in this bucket
			var bucket = this.storage[index]; // make a bucket variable to make things a bit easier
			for (var i = 0; i < bucket.length; i++) { // iterate through the values in the bucket
				if (bucket[i][0] === key) { // the key in a tuple is euqal to the key we are trying to delete
					return bucket[i][1]; // return the value at the supplied key
				}
			}
		}
		console.log('Key ' + key + ' does not exit!'); // if we make it through the loop and do not find the value
  }
}