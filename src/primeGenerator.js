const iV = require('./inputValidator');
var inputVal = new iV.InputValidator();
const err = new Error('Enter a valid number');

(function(exports) {
  function PrimeGenerator() {
    this.run = function(n) {
      if (inputVal.check(n)){
        this.primes = [2];
        for (var i = 2; this.primes.length<n; i++){
          if (this.check(i)) this.primes.push(i);
        };
      } else {
        console.error(err.message);
      };
    };
  };

  PrimeGenerator.prototype.check = function (i) {
    if (inputVal.check(i)) {
      var prime = true;
      var rootI = Math.sqrt(i)+1;
      for (var j = 2; j < rootI; j++){
        if (i%j==0) {prime=false;break;}
      };
      return prime
    } else {
    console.error(err.message);
    };
  };

  exports.PrimeGenerator = PrimeGenerator;
})(this);
