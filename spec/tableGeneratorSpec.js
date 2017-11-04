(function(){

  var tableGenerator = new TableGenerator();

  (function() {
    var testArray = [2, 3, 5]
    var result = ['X', "[2]", "[3]", "[5]"]
    assert.arraysEqual(tableGenerator.makeHeader(testArray), result)
  })();

  (function() {
    var testArray = [2, 3, 5]
    var multiples = [[4, 6, 10], [6, 9, 15], [10, 15, 25]]
    var multiArray = [["X", "[2]", "[3]", "[5]"], ["[2]", 4, 6, 10], ["[3]", 6, 9, 15], ["[5]", 10, 15, 25]]
    assert.multiArraysEqual(tableGenerator.formatArray(testArray, multiples), multiArray);
  })();

  (function() {
    var multiArray = [["X", "[2]", "[3]", "[5]"], ["[2]", 4, 6, 10], ["[3]", 6, 9, 15], ["[5]", 10, 15, 25]]
    var table = "|  X  | [2] | [3] | [5] |\n| [2] |  4  |  6  | 10  |\n| [3] |  6  |  9  | 15  |\n| [5] | 10  | 15  | 25  |\n"
    assert.isEqual(tableGenerator.makeTable(multiArray), table);
  })();

})();
