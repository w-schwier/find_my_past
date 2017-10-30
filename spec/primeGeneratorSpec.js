(function(){
  var primeGenerator = new PrimeGenerator();

  (function() {
    primeGenerator.run(3)
    assert.arraysEqual(primeGenerator.primes, [2, 3, 5] )
  })();

  (function() {
    primeGenerator.run(10)
    assert.arraysEqual(primeGenerator.primes, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] )
  })();
})();

// console.time("time taken: ");
// console.timeEnd("time taken: ");
