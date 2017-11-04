(function(){

  var arrayMultiplier = new ArrayMultiplier();

  (function() {
    var testArray = [2, 3, 5]
    var multiArray = [[4, 6, 10], [6, 9, 15], [10, 15, 25]]
    assert.multiArraysEqual(arrayMultiplier.run(testArray), multiArray, "Array correctly multipled");
  })();


})();
