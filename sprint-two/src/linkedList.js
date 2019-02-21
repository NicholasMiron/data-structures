var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {
    var newTail = Node(value);
    if (list.head === null) {
      list.head = newTail;
    } else {
      list.tail.next = newTail;
    }
    list.tail = newTail;
    list.length++;
  };

  list.addToHead = function(value) {
    var newHead = Node(value);
    newHead.next = list.head;
    list.head = newHead;
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var decapitatedHead = list.head;
      list.head = list.head.next;
      list.length--;
      return decapitatedHead.value;
    }
  };

  list.contains = function(target) {
    var currentNode = list.head;
    for (var i = 0; i < list.length; i++) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  };

  list.size = function() {
    return list.length;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
