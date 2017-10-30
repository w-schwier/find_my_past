(function() {
  var primeGenerator = new PrimeGenerator();
  primeGenerator.run(3)
  assert.arraysEqual(primeGenerator.primes, [2, 3, 5] )
})();

(function() {
  var primeGenerator = new PrimeGenerator();
  primeGenerator.run(10)
  assert.arraysEqual(primeGenerator.primes, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] )
})();


// console.time("time taken: ");
// console.timeEnd("time taken: ");
