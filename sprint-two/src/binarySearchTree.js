class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  //Insert a new value into the correct spot on the tree
  insert(value) {
    //Create a newTree with value
    var newTree = new BinarySearchTree(value);

    //Helper function to search for correct placement
    var searchChild = function(node, value) {
      if (value < node.value) {
        if (node.left === null) {
          node.left = newTree;
        } else {
          searchChild(node.left, value);
        }
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = newTree;
        } else {
          searchChild(node.right, value);
        }
      }
    };
    //First call to helper function
    searchChild(this, value); 
  }

  //Returns a boolean of whether or not our tree has any particular value
  contains(value) {
    if (this.value === value) {
      return true;
    } else {
      if (value < this.value && this.left !== null) {
        return this.left.contains(value);
      } else if (value > this.value && this.right !== null) {
        return this.right.contains(value);
      }
    }
    return false;
  }

  //Executes a callback on every value in the tree
  depthFirstLog(cb) {
    cb(this.value);
    if (this.left !== null) {
      this.left.depthFirstLog(cb);
    }
    if (this.right !== null) {
      this.right.depthFirstLog(cb);
    }
  }
}




/*
 * Complexity: What is the time complexity of the above functions?
 */
