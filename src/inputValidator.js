(function(exports) {
  function InputValidator() {
    this.check = function(input) {
      var x = parseFloat(input)
      return (x > 0 && Number.isInteger(x));
    };
  };

  exports.InputValidator = InputValidator;
})(this);
