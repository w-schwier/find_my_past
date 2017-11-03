const err = new Error('Enter a valid number');
const startingNumber = 2;

(function(exports) {
  function PrimeGenerator() {
    this.run = function(n) {
      if (isValid(n)){
        this.primes = [startingNumber];
        for (var i = startingNumber; this.primes.length<n; i++){
          if (this.check(i)) this.primes.push(i);
        };
      } else {
        console.error(err.message);
      };
    };
  };

  PrimeGenerator.prototype.check = function (i) {
    if (isValid(i)) {
      var prime = true;
      var rootI = Math.sqrt(i)+1;
      for (var j = startingNumber; j < rootI; j++){
        if (i%j==0) {prime=false;}
      };
      return prime
    } else {
    console.error(err.message);
    };
  };

  exports.PrimeGenerator = PrimeGenerator;
})(this);

function isValid(x){
  return (x > 0 && Number.isInteger(x));
}
