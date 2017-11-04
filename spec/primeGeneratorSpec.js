(function(){
  var primeGenerator = new PrimeGenerator();

  (function() {
    assert.isFalse(primeGenerator.check(4), "primeGenerator checking 4 returns false")
  })();

  (function() {
    assert.isTrue(primeGenerator.check(7), "primeGenerator checking 7 returns true")
  })();

  (function() {
    assert.isFalse(primeGenerator.check(0), "primeGenerator checking 0 raises an error and returns false")
  })();

  (function() {
    assert.isFalse(primeGenerator.check(-4), "primeGenerator checking -4 raises an error and returns false")
  })();

  (function() {
    assert.isFalse(primeGenerator.run(0), "primeGenerator running 0 raises an error and returns false")
  })();

  (function() {
    assert.isFalse(primeGenerator.run(-4), "primeGenerator running -4 raises an error and returns false")
  })();

  (function() {
    primeGenerator.run(3)
    assert.arraysEqual(primeGenerator.primes, [2, 3, 5] ,  "primeGenerator running with n=3 returns the correct array")
  })();

  (function() {
    primeGenerator.run(10)
    assert.arraysEqual(primeGenerator.primes, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29], "primeGenerator running with n=10 returns the correct array")
  })();
})();
