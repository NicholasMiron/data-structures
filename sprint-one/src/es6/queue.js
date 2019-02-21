class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.queueSize = 0;
    this.storage = {};
  }
  size() {
    return this.queueSize;
  }
  enqueue(value) {
    this.storage[this.queueSize] = value;
    this.queueSize++;
  }
  dequeue() {
    if (this.queueSize > 0) {
      var firstInLine = this.storage[0];
      delete this.storage[0];
      this.queueSize--;
      for (var key in this.storage) {
        this.storage[key - 1] = this.storage[key];
      }
      return firstInLine;
    }
  }

}
