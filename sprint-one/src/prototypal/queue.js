var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.queueSize = 0;
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {
  size: function() {
    return this.queueSize;
  },
  enqueue: function(value) {
    this.storage[this.queueSize] = value;
    this.queueSize++;
  },
  dequeue: function() {
    if (this.queueSize > 0) {
      var firstInLine = this.storage[0];
      this.queueSize--;
      for (var key in this.storage) {
        this.storage[key - 1] = this.storage[key];
      }
      return firstInLine;
    }
  }
};


