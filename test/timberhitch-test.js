var timberhitch = require('../lib/timberhitch'),
  os = require('os'),
  assert = require('assert');

describe('Using the timberhitch module', function () {

  describe('When not providing a component string', function () {
    it('should generate a logging key without the compoenent', function (done) {
      assert.strictEqual(timberhitch(), os.hostname() + ':' + process.pid);
      done();
    });
  });

  describe('When providing a component string', function () {
    it('should generate a logging key with the component', function (done) {
      assert.strictEqual(timberhitch('myapp'), 'myapp' + ':' + os.hostname() + ':' + process.pid);
      done();
    });
  });

});
