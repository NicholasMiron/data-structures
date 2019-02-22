var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];
  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
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



/*
 * Complexity: What is the time complexity of the above functions?
 */
