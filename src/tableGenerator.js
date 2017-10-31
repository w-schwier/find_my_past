(function(exports) {
  function TableGenerator() {
    this.finishedTable = [];
  };

  TableGenerator.prototype.multiplyArray = function (primes) {
    var multiArray = [];
    var size = primes.length;
    for (i = 0; i < size; i++) {
      multiArray[i] = [];
      // multiArray[i+1] = [];
      for(j = 0; j < size; j++){
        multiArray[0][0] = 'X';
        multiArray[0][(j+1)] = primes[j];
        multiArray[(i)][0] = primes[i];
        prime = primes[i]
        prime2 = primes[j]
        multiArray[i][j] = prime * prime2;
        };
      };
      // debugger;
    return multiArray;
  };

  exports.TableGenerator = TableGenerator;
})(this);

// TableGenerator.prototype.multiplyArray = function (primes) {
//   var multiArray = [];
//   var size = primes.length;
//   for (i = 0; i < size; i++) {
//     multiArray[i] = [];
//     for(j = 0; j < size; j++){
//       multiArray[0][0] = 'X';
//       if (i===0) {
//         multiArray[0][(j+1)] = primes[(j+1)];
//       } else if (j===0) {
//         multiArray[(i+1)][0] = primes[i+1];
//       } else {
//         prime = primes[i]
//         prime2 = primes[j]
//         debugger;
//         var i2 = (i + 1)
//         var j2 = (j +1)
//         multiArray[i2][j2] = prime * prime2;
//       };
//     };
//   };
//   return multiArray;
// };
