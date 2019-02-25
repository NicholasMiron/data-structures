class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  //Insert a new value into the correct spot on the tree
  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  //Returns a boolean of whether or not our tree has any particular value
  contains(value) {
    if (this.value === value) {
      return true;
    }
    if (value < this.value && this.left !== null) {
      return this.left.contains(value);
    } 
    if (value > this.value && this.right !== null) {
      return this.right.contains(value);
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

  //Searches a tree
  //Will complete each level of the tree before moving to the next
  breadthFirstLog() {
    //Create a queue to track search order
    var breadthQueue = [this];
    var returnVal = [];
    var iterationFunc = function(root) {
      //If current node has left and/or right push into queue
      if (root.left) {
        breadthQueue.push(root.left);
      }
      if (root.right) {
        breadthQueue.push(root.right);
      }
      returnVal.push(root.value);
      breadthQueue.shift();
      if (breadthQueue[0]) {
        iterationFunc(breadthQueue[0]);
      }
    };
    iterationFunc(this);
    return returnVal;
  }
}
/*
 * Complexity: What is the time complexity of the above functions?
   Insert: O(1) - no loops, goes straight to correct spot
   contains: O(1) - no loops, bunch of if statements
   depthFirstLog O(1) - no loops, bunch of if statements
 */
