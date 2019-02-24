describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", "addToHead", "removeTail", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
    expect(linkedList.addToHead).to.be.a('function');
    expect(linkedList.removeTail).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added with "addToTail"', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should designate a new head when new nodes are added with "addToHead"', function() {
    linkedList.addToHead(4);
    expect(linkedList.head.value).to.equal(4);
    linkedList.addToHead(5);
    expect(linkedList.head.value).to.equal(5);
  });

  it('should accept negative values for "addToHead" and "addToTail"', function() {
    linkedList.addToHead(-4);
    expect(linkedList.head.value).to.equal(-4);
    linkedList.addToTail(-5);
    expect(linkedList.tail.value).to.equal(-5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    linkedList.addToHead(4);
    linkedList.addToHead(-3);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.removeTail();
    expect(linkedList.tail.value).to.equal(-3);
  });

  it('should return the value of the former tail when "removeTail" is called', function() {
    linkedList.addToTail(-2);
    linkedList.addToTail(2);
    expect(linkedList.removeTail()).to.equal(2);
    expect(linkedList.tail.value).to.equal(-2);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  it('should have size 0 when created', function() {
    expect(linkedList.size()).to.equal(0);
  });

  it('should increase size when adding nodes', function() {
    linkedList.addToTail(3);
    linkedList.addToTail(10);
    linkedList.addToTail(2);
    expect(linkedList.size()).to.equal(3);
  });

  it('should decrement size when removing nodes', function() {
    linkedList.addToHead(2);
    linkedList.addToHead(5);
    expect(linkedList.size()).to.equal(2);
    linkedList.removeHead();
    expect(linkedList.size()).to.equal(1);
  });

  it('should not decrement below a size of zero', function() {
    linkedList.removeHead();
    expect(linkedList.size()).to.equal(0);
    linkedList.removeTail();
    expect(linkedList.size()).to.equal(0);
    linkedList.addToHead(2);
    expect(linkedList.size()).to.equal(1);
    linkedList.removeHead();
    expect(linkedList.size()).to.equal(0);
    linkedList.addToTail(2);
    expect(linkedList.size()).to.equal(1);
    linkedList.removeTail();
    expect(linkedList.size()).to.equal(0);
  });

  it('should add to head when "addToHead" is called', function() {
    linkedList.addToTail(3);
    linkedList.addToHead(2);
    expect(linkedList.head.next.value).to.equal(3);
    expect(linkedList.head.value).to.equal(2);
  });

  it('should be able to sequentially call "addToHead"', function() {
    linkedList.addToHead(1);
    linkedList.addToHead(3);
    linkedList.addToHead(2);
    expect(linkedList.head.value).to.equal(2);
  });

  it('should designate a new tail when remove tail is called', function() {
    linkedList.addToHead(1);
    linkedList.addToHead(2);
    linkedList.addToHead(3);
    linkedList.removeTail();
    expect(linkedList.tail.value).to.equal(2);
  });
});
