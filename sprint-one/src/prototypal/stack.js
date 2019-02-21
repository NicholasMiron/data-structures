var Stack = function() {
  //Blog Example uses Stack.prototype also needs var stackMethods = {};
  //Medium Example Uses stackMethods
  //Giraffe Example Uses Stack.stuff

  var newStack = Object.create(Stack.stuff);
  newStack.stackSize = 0;
  newStack.storage = {};
  return newStack;
};

// Medium Example (Change create variable to stuff) PASSES
// var stuff = {
//   size : function() {
//     return this.stackSize;
//   },
//   push : function(value) {
//     this.storage[this.stackSize] = value;
//     this.stackSize++;
//   },
//   pop : function() {
//     if(this.stackSize > 0) {
//       this.stackSize--;
//       var popped = this.storage[this.stackSize];
//       delete this.storage[this.stackSize];
//       return popped;
//     }
//   }
// };


//Blog Example (Change create variable to Stack.prototype) FAILS
// var stuff = {};

// Stack.prototype.size = function() {
//   return this.stackSize;
// }

// Stack.prototype.push = function(value) {
//   this.storage[this.stackSize] = value;
//   this.stackSize++;
// }

// Stack.prototype.pop = function() {
//   if (this.stackSize > 0) {
//     this.stackSize--;
//     var popped = this.storage[this.stackSize];
//     delete this.storage[this.stackSize];
//     return popped;
//   }
// }


//Giraffe Example (Change create variable to Stack.stuff) FAILS
Stack.stuff = {};
Stack.stuff.size = function() {
  return this.stackSize;
};
Stack.stuff.push = function(value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;
};
Stack.stuff.pop = function() {
  if (this.stackSize > 0) {
    this.stackSize--;
    var popped = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    return popped;
  }
};