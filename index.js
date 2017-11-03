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
      // console.time("Time taken to generate primes: ");
      primeGen.run(n)
      // console.timeEnd("Time taken to generate primes: ");
      console.time("Time taken to create table: ");
      tableGen.multiplyArray2(primeGen.primes);
      console.timeEnd("Time taken to create table: ");
    } else {
      console.log("Please try again with a whole number that's at least 1...")
      execute()
    };
  });
};

execute();
// console.log(tableGen.multiplyArray2(primeGen.primes));
