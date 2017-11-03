(function(exports) {
  function TableGenerator() {
  };

  TableGenerator.prototype.makeHeader = function (array) {
    array.unshift('X')
    return array
  };

  TableGenerator.prototype.formatArray = function (primes, multiples) {
    var headingArray = this.makeHeader(primes)
    var finishedArray = multiples
    finishedArray.unshift(headingArray)
    for (i=1;i<headingArray.length;i++){
      finishedArray[i].unshift(headingArray[i]);
    }
    return finishedArray;
  };

  TableGenerator.prototype.run = function (primes, multiples) {
    var multiArray = this.formatArray(primes, multiples)
    this.makeTable(multiArray);
  };

  exports.TableGenerator = TableGenerator;
})(this);

// function buff(val){
//   var buff = '';
//   var pad = 4 - val;
//     while( pad-- > 0 )
//             buff += ' ';
//   return buff;
// }
