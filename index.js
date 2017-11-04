const rL = require('readline');
const iV = require('./src/inputValidator');
const pG = require('./src/primeGenerator');
const aM = require('./src/arrayMultiplier');
const tG = require('./src/tableGenerator');
var inputVal = new iV.InputValidator();
var primeGen = new pG.PrimeGenerator();
var arrayMultiplier = new aM.ArrayMultiplier();
var tableGen = new tG.TableGenerator();

var readline = rL.createInterface({
  input: process.stdin,
  output: process.stdout
});

execute = function() {
  readline.question("Please give a value for n (number of primes) ", function(n) {
    if (inputVal.check(n)) {
      readline.close();
      primeGen.run(n)
      var primes = primeGen.primes
      var multiples = arrayMultiplier.run(primes);
      tableGen.run(primes, multiples)
      console.log(tableGen.finishedTable);
    } else {
      console.log("Please try again with a whole number that's at least 1...")
      execute()
    };
  });
};

execute();

executeTiming = function() {
  readline.question("Please give a value for n (number of primes) ", function(n) {
    if (inputVal.check(n)) {
      readline.close();
      console.time("Time taken to generate primes: ");
      primeGen.run(n)
      console.timeEnd("Time taken to generate primes: ");
      console.time("Time taken to multiply primes: ");
      var primes = primeGen.primes
      var multiples = arrayMultiplier.run(primes);
      console.timeEnd("Time taken to multiply primes: ");
      console.time("Time taken to format table: ");
      tableGen.run(primes, multiples)
      console.log(tableGen.finishedTable);
      console.timeEnd("Time taken to format table: ");
    } else {
      console.log("Please try again with a whole number that's at least 1...")
      execute()
    };
  });
};
