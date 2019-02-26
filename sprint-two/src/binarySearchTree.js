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
    if (this.left === null) {
      if (this.right.getMaxDepth() / 2 > 1) {
        this.rebalance();
      }
    } else if (this.right === null) {
      if (this.left.getMaxDepth() / 2 > 1) {
        this.rebalance();
      }
    } else {
      if (this.left.getMaxDepth() / 2 > this.right.getMaxDepth()) {
        this.rebalance();
      } else if (this.right.getMaxDepth() / 2 > this.left.getMaxDepth()) {
        this.rebalance();
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

  getMaxDepth() {
    if (this.left === null && this.right === null) {
      return 1;
    } else {
      if (this.left === null) {
        return this.right.getMaxDepth() + 1;
      }
      if (this.right === null) {
        return this.left.getMaxDepth() + 1;
      }
    }
    return Math.max(this.left.getMaxDepth(), this.right.getMaxDepth()) + 1;
  }

  //Rebalances the tree once max depth is more than twice as deep as min depth
  rebalance() {
    //Add all values in tree into array 
    var valuesInTree = [];
    var pushValues = function(value) {
      valuesInTree.push(value);
    };
    this.depthFirstLog(pushValues);
    var middleIndex = Math.floor(valuesInTree.length / 2);
    //Sort values 
    valuesInTree.sort((a, b) => a - b);
    //Reset current tree with new head value
    this.left = this.right = null;
    this.value = valuesInTree[middleIndex];
    valuesInTree.splice(middleIndex, 1);
    for (var i = 0; i < valuesInTree.length; i++) {
      this.insert(valuesInTree[i]);
    }

  }
}
/*
 * Complexity: What is the time complexity of the above functions?
   Insert: O(1) - no loops, goes straight to correct spot
   contains: O(1) - no loops, bunch of if statements
   depthFirstLog O(1) - no loops, bunch of if statements
 */
