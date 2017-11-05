(function(exports) {
  function TableGenerator() {
    this.finishedTable = "";
  };

  TableGenerator.prototype.makeHeader = function (array) {
    array.unshift('X')
    for (i=1;i<array.length;i++)
    array[i] = "[" + array[i] + "]"
    return array
  };

  TableGenerator.prototype.formatArray = function (primes, multiples) {
    var headingArray = this.makeHeader(primes)
    var finishedArray = multiples
    finishedArray.unshift(headingArray)
    for (i=1;i<headingArray.length;i++){
      finishedArray[i].unshift(headingArray[i]);
    }
    return finishedArray;
  };

  TableGenerator.prototype.makeTable = function (multiArray) {
    var cellLength = multiArray[multiArray.length-1][0].length + 2
    var size = multiArray.length
    this.addCells(multiArray, size, cellLength);
  };

  TableGenerator.prototype.formatCell = function (cellLength, numberLength, number, leftCell){
    var spaces = cellLength - numberLength;
    var initialSpaces = Number.parseInt(spaces/2)
    var postSpaces = spaces - initialSpaces
    if (leftCell == true) {
      this.finishedTable += ("|" + buff(initialSpaces) + number + buff(postSpaces) + "|")
    } else {
      this.finishedTable += (buff(initialSpaces) + number + buff(postSpaces) + "|")
    };
  };

  TableGenerator.prototype.determineCellType = function (i, j, number, cellLength) {
    var numberLength = null;
    (i>0&&j>0) ? numberLength = number.toString().length : numberLength = number.length
    if (j==0) {
      this.formatCell(cellLength, numberLength, number,true)
    } else if (j>0) {
      this.formatCell(cellLength, numberLength, number,false)
    };
  };

  TableGenerator.prototype.addCells = function (multiArray, size, cellLength) {
    for (i=0;i<size;i++) {
      for (j=0;j<size;j++) {
        var number = multiArray[i][j]
        this.determineCellType(i, j, number, cellLength)
      };
      this.finishedTable += '\n'
    };
  };

  TableGenerator.prototype.run = function (primes, multiples) {
    var multiArray = this.formatArray(primes, multiples)
    this.makeTable(multiArray);
    return this.finishedTable
  };

  exports.TableGenerator = TableGenerator;
})(this);


function buff(times) {
  return new Array(times + 1).join(' ');
}
