'use strict';

const ESLint = require('../fixtures/eslint');
const chai = require('chai');
chai.should();

describe('best-practices', function () {
  it('should not be enforced if module is not used', function () {
    let results = ESLint.run('modular/browser', '5 == 4');
    results.errorCount.should.equal(0);
  });

  it('should require strict equality comparisons', function () {
    let results = ESLint.run('modular/best-practices', '5 == 4');
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(['eqeqeq']);
  });
});

