var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.queueSize = 0;
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  size : function() { return this.queueSize; },
  enqueue : function(value) {
    this.storage[this.queueSize] = value;
    this.queueSize++;
  },
  dequeue : function() {
    if(this.queueSize > 0)
    {
      var dequeued = this.storage[0];
      for(var key in this.storage) {
        this.storage[key - 1] = this.storage[key];
      }
      this.queueSize--;
      return dequeued; 
    }
  }
};


