(function(exports) {
  function TableGenerator() {
    this.finishedTable = [];
  };

  TableGenerator.prototype.formatArray = function (array) {
    array.unshift('X')
    return array
  };

  TableGenerator.prototype.multiplyArray = function (primes) {
    var multiArray = [];
    var headingArray = this.formatArray(primes)
    var size = primes.length;
    for (i = 0; i < size; i++) {
      multiArray[i] = [];
      for(j = 0; j < size; j++){
        if (i == 0) {
          multiArray[i][j] = headingArray[j]
        } else if (j == 0) {
          multiArray[i][j] = headingArray[i]
        } else {
          prime = primes[i]
          prime2 = primes[j]
          multiArray[i][j] = prime * prime2;
        };
      };
    };
    debugger;
    return multiArray;
  };

  exports.TableGenerator = TableGenerator;
})(this);
