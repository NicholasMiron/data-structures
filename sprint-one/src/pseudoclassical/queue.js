var Queue = function() {
  this.queueSize = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return this.queueSize;
};
Queue.prototype.enqueue = function(value) {
  this.storage[this.queueSize] = value;
  this.queueSize++;
};
Queue.prototype.dequeue = function() {
  if (this.queueSize > 0) {
    this.queueSize--;
    var firstInLine = this.storage[0];
    delete this.storage[0];
    for (var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
    return firstInLine;
  }
};


