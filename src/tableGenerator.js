(function(exports) {
  function TableGenerator() {
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
    var finishedTable = "";
    var cellLength = multiArray[multiArray.length-1][0].length + 2
    var size = multiArray.length
    for (i=0;i<size;i++) {
      for (j=0;j<size;j++) {
        if(i==0 &&j==0) {
          var initialSpaces = Number.parseInt((cellLength-1)/2)
          var postSpaces = (cellLength-1) - initialSpaces
          finishedTable +=  "|" + buff(initialSpaces) + multiArray[0][0] + buff(postSpaces) + "|"
        } else if (i==0 && j>0){
          var numberLength = multiArray[0][j].length;
          var spaces = cellLength - numberLength;
          var initialSpaces = Number.parseInt(spaces/2)
          var postSpaces = spaces - initialSpaces
          finishedTable += buff(initialSpaces) + multiArray[0][j] + buff(postSpaces) + "|"
        } else if (j==0 && i>0) {
          var numberLength = multiArray[0][i].length;
          var spaces = cellLength - numberLength;
          var initialSpaces = Number.parseInt(spaces/2)
          var postSpaces = spaces - initialSpaces
          finishedTable += "|" + buff(initialSpaces) + multiArray[i][0] + buff(postSpaces) + "|"
        } else if (i>0&&j>0) {
          var num = multiArray[i][j]
          var numberLength = num.toString().length
          var spaces = cellLength - numberLength;
          var initialSpaces = Number.parseInt(spaces/2)
          var postSpaces = spaces - initialSpaces

          finishedTable += buff(initialSpaces) + multiArray[i][j] + buff(postSpaces) + "|"
        };
      };
      finishedTable += '\n'
    };
    console.log(finishedTable)
    return finishedTable
  };

  TableGenerator.prototype.run = function (primes, multiples) {
    var multiArray = this.formatArray(primes, multiples)
    this.makeTable(multiArray);
  };

  exports.TableGenerator = TableGenerator;
})(this);

function buff(times) {
  return new Array(times + 1).join(' ');
}
