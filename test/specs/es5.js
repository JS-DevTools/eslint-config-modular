'use strict';

var ESLint = require('../fixtures/eslint');
var chai = require('chai');
chai.should();

describe('es5', function () {
  it('should not be enforced if module is not used', function () {
    var results = ESLint.run('modular/browser', 'var foo = 5;');
    results.errorCount.should.equal(0);
  });

  it('should be enforced if module is used', function () {
    var results = ESLint.run('modular/es5', 'var foo = 5;');
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(['strict']);
  });
});

