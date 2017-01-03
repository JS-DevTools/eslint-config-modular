'use strict';

var ESLint = require('../fixtures/eslint');
var chai = require('chai');
chai.should();

describe('best-practices', function () {
  it('should not be enforced if module is not used', function () {
    var results = ESLint.run('modular/browser', '5 == 4');
    results.errorCount.should.equal(0);
  });

  it('should require strict equality comparisons', function () {
    var results = ESLint.run('modular/best-practices', '5 == 4');
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(['eqeqeq']);
  });
});

