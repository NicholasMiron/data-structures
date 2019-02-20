var Stack = function() {
  var someInstance = {};
  // declare size variable
  var stackSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[stackSize] = value;
    stackSize++;
  };

  someInstance.pop = function() {
    var poppedValue;
    if (stackSize > 0) {
      stackSize--;
      poppedValue = storage[stackSize];
      delete storage[stackSize];
    }
    return poppedValue;
  };

  someInstance.size = function() {
    return stackSize;
  };

  return someInstance;
};
