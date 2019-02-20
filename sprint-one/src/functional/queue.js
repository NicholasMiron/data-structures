var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var queueSize = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[queueSize] = value;
    queueSize++;
  };

  someInstance.dequeue = function() {
    var firstInLine;
    if(queueSize > 0) {
      firstInLine = storage[0];
      delete storage[0];
      queueSize--;
      }
      for(var key in storage) {
        storage[key - 1] = storage[key];
        delete storage[key];
    }
    return firstInLine;
  };

  someInstance.size = function() {
    return  queueSize;
  };

  return someInstance;
};
