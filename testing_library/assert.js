var assert = {
  isTrue: function(assertionToCheck, message) {
    if (!assertionToCheck) {
      console.error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("Truthy PASSED: " + message);
    }
  },

  isFalse: function(assertionToCheck, message) {
    if( assertionToCheck ) {
      console.error("Assertion failed: " + assertionToCheck + " is not falsey");
    } else {
      console.log('Falsey PASSED: ' + message);
    }
  },

  isEqual: function(actual, expected, message) {
    if (actual === expected) {
      console.log(actual + ' equals ' + expected + ": " + message);
    } else {
      console.error("Expected " + expected + " but got " + actual);
    }
  },

  isNotEqual: function(actual, expected) {
    if (actual !== expected) {
      console.log(actual + "doesn't equal" + expected);
    } else {
      console.error(actual + " & " + expected + " are the same value")
    }
  },

  doesInclude: function(container, item) {
    if (container.includes(item)) {
      console.log(container + " includes " + item)
    } else {
      console.error(container + " does not include " + item)
    }
  },

  isLesserThan: function(assertionToCheck, otherNumber) {
    if(assertionToCheck < otherNumber) {
      console.log(assertionToCheck + " is less than " + otherNumber)
    } else {
      console.error(assertionToCheck + " is not less than " + otherNumber)
    }
  },

  isGreaterThan: function(assertionToCheck, otherNumber) {
    if(assertionToCheck > otherNumber) {
      console.log(assertionToCheck + " is greater than " + otherNumber)
    } else {
      console.error(assertionToCheck + " is not greater than " + otherNumber)
    }
  },


  arraysEqual: function(array1, array2, message) {
    if (arraysMatch(array1, array2)) {
      console.log(array1 + " is the same as " + array2 + ": " + message);
    } else {
      console.error("Assertion Failed: " + array1 + " Does not Equal " + array2);
    }
  },

  multiArraysEqual: function(array1, array2,message) {
    if (multiArraysMatch(array1, array2)) {
      console.log(array1 + " is the same as " + array2 + ": " + message);
    } else {
      console.error("Assertion Failed: " + array1 + " Does not Equal " + array2);
    }
  }
};

arraysMatch = function(array1, array2) {
  var arraysMatched = true
  for (var i = 0; i < array1.length; ++i) {
    if (array1[i] !== array2[i]) {
      arraysMatched = false;
    }
  }
  return arraysMatched;
}

multiArraysMatch = function(array1, array2) {
  var arraysMatched = true
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array1.length; j++)
    if (array1[i][j] !== array2[i][j]) {
      arraysMatched = false;
    }
  }
  return arraysMatched;
}
