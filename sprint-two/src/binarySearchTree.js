var BinarySearchTree = function(value) {
  this.BSTStorage = new BSTNode(value);
  this.left = 0;
  this.right = 0;
};

BinarySearchTree.prototype.insert = function(value) {
  var newNode = new BSTNode(value);

  var findEmptyChild = function(currentNode, value) {
    if (currentNode.value > value) {
      if (currentNode.children[0] === null) {
        currentNode.children[0] = newNode;
      } else {
        findEmptyChild(currentNode.children[0]);
      }

    } else if (currentNode.value < value) {
      if (currentNode.children[1] === null) {
        currentNode.children[1] = newNode;
      } else {
        findEmptyChild(currentNode.children[1]);
      }

    }
  };
  findEmptyChild(this.BSTStorage, value);
};

BinarySearchTree.prototype.contains = function(value) {

};

BinarySearchTree.prototype.depthFirstLog = function(cb) {

};


var BSTNode = function(value) {
  this.nodeStorage = {};
  this.value = value;
  this.children = [null, null];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
