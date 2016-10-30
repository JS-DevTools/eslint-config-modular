'use strict';

var ESLint = require('../fixtures/eslint');
var chai = require('chai');
chai.should();

describe('browser', function () {
  it('should not be enforced if module is not used', function () {
    var results = ESLint.run('modular/node', 'alert("hello, world")');
    results.errorCount.should.equal(0);
  });

  it('should be enforced if module is used', function () {
    var results = ESLint.run('modular/browser', 'alert("hello, world")');
    results.warningCount.should.equal(1);
    results.rules.should.have.members(['no-alert']);
  });
});

