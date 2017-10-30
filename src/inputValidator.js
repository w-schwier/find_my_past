(function(exports) {
  function InputValidator() {
    this.check = function(x) {
      return (x > 0 && Number.isInteger(x));
    };
  };

  exports.InputValidator = InputValidator;
})(this);
