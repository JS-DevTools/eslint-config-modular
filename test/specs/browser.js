'use strict';

var ESLint = require('../fixtures/eslint');
var chai = require('chai');
chai.should();

describe('browser', function () {
  it('should not be enforced if module is not used', function () {
    var results = ESLint.run('modular/style', "alert('hello, world');\n");
    results.errorCount.should.equal(0);
  });

  it('should warn about `alert()` statements', function () {
    var results = ESLint.run('modular/browser', 'alert("hello, world")');
    results.warningCount.should.equal(1);
    results.rules.should.deep.equal(['no-alert']);
  });
});

