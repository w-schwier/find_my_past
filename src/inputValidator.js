(function(exports) {
  function InputValidator() {
    this.check = function(x) {
      var number = parseInt(x);
      return (number > 0);
    };
  };

  exports.InputValidator = InputValidator;
})(this);
