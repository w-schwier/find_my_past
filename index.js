const rL = require('readline');
const iV = require('./src/inputValidator');
const pG = require('./src/primeGenerator');
var primeGen = new pG.PrimeGenerator();
var inputVal = new iV.InputValidator();

var readline = rL.createInterface({
  input: process.stdin,
  output: process.stdout
});

  execute = function() {
    readline.question("Please give a value for n (number of primes) ", function(n) {
      if (inputVal.check(n)) {
        readline.close();
        primeGen.run(n)
        console.log(primeGen.primes);
      } else {
        console.log("Please try again with a whole number thats at least 1...")
        execute()
      };
    });
  };

execute();
