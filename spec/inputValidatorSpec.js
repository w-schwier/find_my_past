(function(){

  var inputValidator = new InputValidator();

  (function() {
    assert.isTrue(inputValidator.check(1))
  })();

  (function() {
    assert.isTrue(inputValidator.check(4))
  })();

  (function() {
    assert.isFalse(inputValidator.check(0))
  })();

  // (function() {
  //   var inputValidator = new InputValidator();
  //   inputValidator.check(3)
  //   assert.isTrue(inputValidator.check(2))
  // })();
  //
  // (function() {
  //   var inputValidator = new InputValidator();
  //   inputValidator.check(3)
  //   assert.isTrue(inputValidator.check(2000))
  // })();
  //
  // (function() {
  //   var inputValidator = new InputValidator();
  //   inputValidator.check(3)
  //   assert.isFalse(inputValidator.check(0))
  // })();
  //
  // (function() {
  //   var inputValidator = new InputValidator();
  //   inputValidator.check(3)
  //   assert.isFalse(inputValidator.check(0.6))
  // })();
  //
  // (function() {
  //   var inputValidator = new InputValidator();
  //   inputValidator.check(3)
  //   assert.isFalse(inputValidator.check(5.5))
  // })();
})();
