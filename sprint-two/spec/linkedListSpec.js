describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
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

  // add more tests here to test the functionality of linkedList
});
