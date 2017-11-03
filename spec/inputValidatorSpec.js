(function(){

  var inputValidator = new InputValidator();

  (function() {
    assert.isFalse(inputValidator.check(0))
  })();

  (function() {
    assert.isTrue(inputValidator.check(1))
  })();

  (function() {
    assert.isTrue(inputValidator.check(4))
  })();

  (function() {
    assert.isTrue(inputValidator.check(2000))
  })();

  (function() {
    assert.isFalse(inputValidator.check(0.6))
  })();

  (function() {
    assert.isFalse(inputValidator.check(55.5))
  })();

  (function() {
    assert.isFalse(inputValidator.check("f"))
  })();

  (function() {
    assert.isFalse(inputValidator.check(-4))
  })();

})();
