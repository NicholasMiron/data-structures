var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
    }
    this.tail = newNode;
    this.length++;
  };

  list.removeTail = function() {
    var removedValue;
    if (this.length > 0) {
      removedValue = this.tail.value;
      if (this.length === 1) {
        delete this.head;
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.previous;
      }
      this.length--;
    }
    return removedValue;
  };

  list.addToHead = function(value) {
    var newNode = Node(value);
    if (!this.tail) {
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
  };

  list.removeHead = function() {
    var removedValue;
    if (this.length > 0) {
      removedValue = this.head.value;
      if (this.length === 1) {
        delete this.head;
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      this.length--;
    }
    return removedValue;
  };

  list.contains = function(target) {
    var currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };
  
  list.size = function() {
    return this.length;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.previous = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
