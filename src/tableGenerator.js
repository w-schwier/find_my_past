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
    return multiArray;
  };

  TableGenerator.prototype.multiplyArray2 = function (primes) {
    var result = 'X   ';
    var headingArray = this.formatArray(primes)
    var size = primes.length;
    for (i = 0; i < size; i++) {
      for(j = 0; j < size; j++){
        if (i == 0 && j > 0 ) {
          result += '[' + headingArray[j] + ']' + buff((headingArray[j]+'').length+2);
        } else if (j == 0 && i > 0) {
          result += '[' + headingArray[i] + '] ';
        } else if (i>0 && j>0){
          var value = (primes[i]*primes[j])
          result += buff((value+'').length ) + value;
        };
      };
      result += '\n'
    };
    return result;
  };

  exports.TableGenerator = TableGenerator;
})(this);

function buff(val){
  var buff = '';
  var pad = 4 - val;
    while( pad-- > 0 )
            buff += ' ';
  return buff;
}
