(function() {
  var primeGenerator = new PrimeGenerator();
  primeGenerator.run(3)
  assert.arraysEqual(primeGenerator.primes, [2, 3, 5] )
})();
