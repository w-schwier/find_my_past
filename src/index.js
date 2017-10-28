// var n = parseInt(prompt("Enter n: "), 10);

var primeGen = new PrimeGenerator();
console.time("time taken: ");
primeGen.run(20000);
console.timeEnd("time taken: ");
