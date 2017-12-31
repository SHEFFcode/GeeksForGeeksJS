class Queue {
  constructor(capacity) {
    this.front = 0;
    this.rear = capacity - 1;
    this.size = 0;
    this.capacity = capacity;
    this.container = new Array(capacity)
  }

  isFull() {
    return this.size === this.capacity;
  }

  isEmpty() {
    return size === 0;
  }

  enqueue(item) {
    if (this.isFull()) {
      return;
    } else {
      this.rear = (this.rear + 1) % this.capacity;
      this.container[rear] = item;
      this.size++;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    } else {
      let item = this.container[front];
      this.front = (front + 1) % this.capacity;
      this.size--;
      return item;
    }
  }

  getFront() {
    return this.isEmpty() ? null : this.container[this.front]; 
  }

  getRear() {
    return this.isEmpty() ? null : this.container[this.rear];
  }
}