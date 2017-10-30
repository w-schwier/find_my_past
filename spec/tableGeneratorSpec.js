(function(){

  var tableGenerator = new TableGenerator();

  (function() {
    assert.arraysEqual(tableGenerator.finishedTable, [])
  })();

  (function() {
    var testArray = [2, 3, 5]
    var multiArray = [['x', 2, 3, 5], [2, 4, 6, 10], [3, 6, 9, 15], [5, 10, 15, 25]]
    assert.arraysEqual(tableGenerator.multiplyArray(testArray), multiArray);
  })();

})();
