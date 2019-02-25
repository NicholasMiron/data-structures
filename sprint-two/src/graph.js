

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var nodes in this.storage) {
    if (this.hasEdge(nodes, node)) {
      this.removeEdge(nodes, node);
    }
  }
  if (this.contains(node)) {
    delete this.storage[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.contains(fromNode)) {
    return this.storage[fromNode].includes(toNode);  
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    if(!this.hasEdge(fromNode, toNode)) {
      this.storage[fromNode].push(toNode);
    }
    if (!this.hasEdge(toNode, fromNode)) {
      this.storage[toNode].push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    var indexFromNode = this.storage[fromNode].indexOf(toNode);
    var indexToNode = this.storage[toNode].indexOf(fromNode);
    if (indexFromNode !== -1) {
      this.storage[fromNode].splice(indexFromNode, 1);
    }
    if (indexToNode !== -1) {
      this.storage[toNode].splice(indexToNode, 1);
    }
    
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.storage) {
    cb.call(this, node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


