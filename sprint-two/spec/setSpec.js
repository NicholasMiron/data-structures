describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should return 0 when a new set is created', function() {
    expect(set.size()).to.equal(0);
  });

  it('should properly increment size when items are added', function() {
    set.add('Nick');
    set.add('Frank');
    expect(set.size()).to.equal(2);
  });

  it('should properly decrement size when items are removed', function() {
    set.add('Nick');
    set.add('Frank');
    set.remove('Nick');
    expect(set.size()).to.equal(1);
  });

});
