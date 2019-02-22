var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  set.setSize = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
    this.setSize++;
  }
};

setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    this._storage.splice(this._storage.indexOf(item), 1);
    this.setSize--;
  }
};

setPrototype.size = function() {
  return this.setSize;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
