describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree(3);
  });

  it('should have methods named "addChild", "removeFromParent", and "contains", and a properties named "value" and "parent"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.removeFromParent).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
    expect(tree.hasOwnProperty('parent')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should have no parent for a new tree', function() {
    expect(tree.parent).to.equal(null);
  });

  it('should properly designate the parent property', function() {
    tree.addChild(5);
    tree.addChild(2);
    expect(tree.children[0].parent).to.equal(tree);
    expect(tree.children[1].parent).to.equal(tree);
    tree.children[1].addChild(1);
    expect(tree.children[1].children[0].parent).to.equal(tree.children[1]);
  });

  it('should properly dissociate parent and child when "removeFromParent" is called', function() {
    tree.addChild(4);
    tree.addChild(5);
    tree.addChild(2);
    tree.children[2].removeFromParent();
    expect(tree.children[2]).to.equal(undefined);
    expect(tree.children[0].removeFromParent().parent).to.equal(null);
    expect(tree.children[0].value).to.equal(5); 
  });

});
