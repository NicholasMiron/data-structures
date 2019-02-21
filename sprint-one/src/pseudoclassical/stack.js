var Stack = function() {
  this.stackSize = 0;
  this.storage = {};
};

Stack.prototype.size = function() {
  return this.stackSize;
};
Stack.prototype.push = function(value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;
};
Stack.prototype.pop = function() {
  if (this.stackSize > 0) {
    this.stackSize--;
    var popped = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    return popped;
  }
};

