(function(){
  var primeGenerator = new PrimeGenerator();

  (function() {
    assert.isFalse(primeGenerator.check(4))
  })();

  (function() {
    assert.isTrue(primeGenerator.check(7))
  })();

  // (function() {
  //   assert.isFalse(primeGenerator.check(0))
  // })();
  //
  // (function() {
  //   assert.isFalse(primeGenerator.check(-4))
  // })();

  (function() {
    primeGenerator.run(3)
    assert.arraysEqual(primeGenerator.primes, [2, 3, 5] )
  })();

  (function() {
    primeGenerator.run(10)
    assert.arraysEqual(primeGenerator.primes, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] )
  })();
})();
