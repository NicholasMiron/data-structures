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

  it('should return 0 when more items are removed than are added', function() {
    set.add('Nick');
    set.remove('Nick');
    set.remove('Frank');
    expect(set.size()).to.equal(0);
  });

  it('should be able to properly add numbers', function() {
    set.add(1);
    set.add('nick');
    set.add(-4);
    expect(set.size()).to.equal(3);
    expect(set.contains('nick')).to.equal(true);
    expect(set.contains(1)).to.equal(true);
    expect(set.contains(-4)).to.equal(true);
    expect(set.contains(4)).to.equal(false);
  });

  it('should be able to remove numbers after they have been added', function() {
    set.add(1);
    set.add('nick');
    set.add(-49);
    set.remove(1);
    expect(set.contains(1)).to.equal(false);
    expect(set.contains(-49)).to.equal(true);
    set.remove(-49);
    expect(set.contains(-49)).to.equal(false);
    expect(set.size()).to.equal(1);
  });

  it('should be able to handle the adding of objects', function() {
    var obj1 = {
      aProp: 'hello',
      aNum: 3,
      aBool: true,
      aFunc: function(value) { console.log(value); }
    };
    var obj2 = {
      aProp: 'hi',
      aNum: 1,
      aBool: false,
      aFunc: function(bear) { console.log(bear); }
    };
    set.add(obj1);
    expect(set.size()).to.equal(1);
    expect(set.contains(obj1)).to.equal(true);
    expect(set.contains(obj2)).to.equal(false);
  });

  it('should handle the removal of objects', function() {
    var obj1 = {
      aProp: 'hello',
      aNum: 3,
      aBool: true,
      aFunc: function(value) { console.log(value); }
    };
    var obj2 = {
      aProp: 'hi',
      aNum: 1,
      aBool: false,
      aFunc: function(bear) { console.log(bear); }
    };
    set.add(obj1);
    set.add(obj2);
    set.remove(obj1);
    expect(set.size()).to.equal(1);
    expect(set.contains(obj1)).to.equal(false);
    expect(set.contains(obj2)).to.equal(true);
  });

  it('should be able to handle the adding of arrays', function() {
    var arr1 = [1, 2, 3, 4];
    var arr2 = ['hi', 'hello', 'bonjour'];
    var arr3 = ['hola', true, 1];
    set.add(arr1);
    set.add(arr2);
    expect(set.size()).to.equal(2);
    expect(set.contains(arr1)).to.equal(true);
    expect(set.contains(arr2)).to.equal(true);
    expect(set.contains(arr3)).to.equal(false);
  });

  it('should handle the removal of arrays', function() {
    var arr1 = [1, 2, 3, 4];
    var arr2 = ['hi', 'hello', 'bonjour'];
    var arr3 = ['hola', true, 1];
    set.add(arr1);
    set.add(arr2);
    set.add(arr3);
    expect(set.size()).to.equal(3);
    set.remove(arr2);
    expect(set.size()).to.equal(2);
    expect(set.contains(arr1)).to.equal(true);
    expect(set.contains(arr2)).to.equal(false);
    expect(set.contains(arr3)).to.equal(true);
  });
});
