(function(){

  var tableGenerator = new TableGenerator();

  (function() {
    assert.arraysEqual(tableGenerator.finishedTable, [])
  })();

  (function() {
    var testArray = [2, 3, 5]
    var result = ['X', 2, 3, 5]
    assert.arraysEqual(tableGenerator.makeHeader(testArray), result)
  })();


  (function() {
    var testArray = [2, 3, 5]
    var multiArray = [[4, 6, 10], [6, 9, 15], [10, 15, 25]]
    assert.multiArraysEqual(tableGenerator.multiplyArray(testArray), multiArray);
  })();

  // (function() {
  //   var testArray = [2, 3, 5]
  //   var finishedTable = "X [2][3][5]\n[2] 4 6 10 \n[3] 6 9 15 \n[5] 10 15 25 \n"
  //   assert.isEqual(tableGenerator.multiplyArray2(testArray), finishedTable);
  //   })();

})();
// var multiArray = [["X", 2, 3, 5], [2, 4, 6, 10], [3, 6, 9, 15], [5, 10, 15, 25]]
