const rL = require('readline');
const iV = require('./src/inputValidator');
const pG = require('./src/primeGenerator');
const tG = require('./src/tableGenerator')
var inputVal = new iV.InputValidator();
var primeGen = new pG.PrimeGenerator();
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
        console.log("starting table generation")
        console.time("time taken: ");
        tableGen.multiplyArray(primeGen.primes);
        console.timeEnd("time taken: ");
      } else {
        console.log("Please try again with a whole number thats at least 1...")
        execute()
      };
    });
  };

execute();
