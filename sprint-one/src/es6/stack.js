class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.stackSize = 0;
    this.storage = {};
  }

  size() {
    return this.stackSize;
  }
  push(value) {
    this.storage[this.stackSize] = value;
    this.stackSize++;
  }
  pop() {
    if (this.stackSize > 0) {
      this.stackSize--;
      var popped = this.storage[this.stackSize];
      delete this.storage[this.stackSize];
      return popped;
    }
  }
}