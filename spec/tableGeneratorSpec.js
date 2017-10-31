(function(){

  var tableGenerator = new TableGenerator();

  (function() {
    assert.arraysEqual(tableGenerator.finishedTable, [])
  })();

  (function() {
    var testArray = [2, 3, 5]
    var result = ['X', 2, 3, 5]
    assert.arraysEqual(tableGenerator.formatArray(testArray), result)
  })();


  (function() {
    var testArray = [2, 3, 5]
    var multiArray = [["X", 2, 3, 5], [2, 4, 6, 10], [3, 6, 9, 15], [5, 10, 15, 25]]
    assert.multiArraysEqual(tableGenerator.multiplyArray(testArray), multiArray);
  })();

  // (function() {
  //   var multiArray = [["X", 2, 3, 5], [2, 4, 6, 10], [3, 6, 9, 15], [5, 10, 15, 25]]
  //   var finishedTable = ""
  // })();

})();
