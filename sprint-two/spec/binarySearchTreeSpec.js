describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });

  it('should log values in the breadth first search way', function() {
    var array = [];
    binarySearchTree.insert(3);
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    binarySearchTree.insert(4);
    binarySearchTree.insert(13);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    binarySearchTree.insert(10);
    binarySearchTree.insert(15);

    array = binarySearchTree.breadthFirstLog();
    console.log(array);
    //Uses eql which checks equality for arrays
    expect(array).to.eql([3, 1, 6, 2, 4, 7, 5, 13, 10, 15]);
  });

  it('should rebalance when max depth twice as large as min depth', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(10);
    binarySearchTree.insert(4);
    binarySearchTree.insert(3);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.value).to.equal(4);
    expect(binarySearchTree.right.right.value).to.equal(10);
    expect(binarySearchTree.right.value).to.equal(5);
    expect(binarySearchTree.left.value).to.equal(2);
  });
});
