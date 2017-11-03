(function(exports) {
  function ArrayMultiplier() {
  };

  ArrayMultiplier.prototype.multiplyArray = function (primes) {
    var multiples = [];
    var size = primes.length;
    for (i = 0; i < size; i++) {
      multiples[i] = [];
      for(j = 0; j < size; j++){
        multiples[i][j] = primes[i] * primes[j];
      };
    };
    return multiples;
  };

  exports.ArrayMultiplier = ArrayMultiplier;
})(this);
