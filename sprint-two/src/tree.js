var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  newTree.children = [];
  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  newTree.parent = this;
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  var containsValue = false;
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    containsValue = this.children[i].contains(target);
    if (containsValue) {
      return true;
    }
  }
  return false;
};

treeMethods.removeFromParent = function() {
  if (this.parent.children.length > 0) {
    var childTree = this;
    this.parent.children.splice(this.parent.children.indexOf(this), 1);
    this.parent = null;
    return childTree;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
