var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.stackSize = 0;
  newStack.storage = {};
  return newStack;
};

var stackMethods = {
  size : function() {
    return this.stackSize;
  },
  push : function(value) {
    this.storage[this.stackSize] = value;
    this.stackSize++;
  },
  pop : function() {
    if(this.stackSize > 0) {
      this.stackSize--;
      var popped = this.storage[this.stackSize];
      delete this.storage[this.stackSize];
      return popped;
    }
  }
};