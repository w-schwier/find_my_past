(function(){

  var inputValidator = new InputValidator();

  (function() {
    assert.isFalse(inputValidator.check(0), "inputValidator checking 0 returns false")
  })();

  (function() {
    assert.isTrue(inputValidator.check(1), "inputValidator checking 1 returns true")
  })();

  (function() {
    assert.isTrue(inputValidator.check(4), "inputValidator checking 4 returns true")
  })();

  (function() {
    assert.isTrue(inputValidator.check(2000), "inputValidator checking 2000 returns true")
  })();

  (function() {
    assert.isFalse(inputValidator.check(0.6), "inputValidator checking 0.6 returns false")
  })();

  (function() {
    assert.isFalse(inputValidator.check(55.5), "inputValidator checking 55.5 returns false")
  })();

  (function() {
    assert.isFalse(inputValidator.check("f"), "inputValidator checking f returns false")
  })();

  (function() {
    assert.isFalse(inputValidator.check(-4), "inputValidator checking -4 returns false")
  })();

})();
