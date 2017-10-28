(function() {
  var primeGenerator = new PrimeGenerator();
  primeGenerator.run(3)
  assert.isEqual(primeGenerator.primes, [2, 3, 5] )
})();
