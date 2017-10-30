(function(exports) {
  function PrimeGenerator() {
    this.run = function(n) {
      this.primes = [2];
      for (var i = 2; this.primes.length<n; i++){
        var prime = true;
        var rootI = Math.sqrt(i)+1;
        for (var j = 2; j < rootI; j++){
          if (i%j==0) {prime=false;break;}
        };
        if (prime) this.primes.push(i);
      };
    };
  };

  exports.PrimeGenerator = PrimeGenerator;
})(this);
