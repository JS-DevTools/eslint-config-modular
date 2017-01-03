'use strict';

var ESLint = require('../fixtures/eslint');
var chai = require('chai');
chai.should();

describe('style', function () {
  it('should not be enforced if module is not used', function () {
    var results = ESLint.run('modular/browser',
      'var My_Variable = "hello, world"'
    );
    results.errorCount.should.equal(0);
  });

  it('should be enforced if module is used', function () {
    var results = ESLint.run('modular/style',
      'var My_Variable = "hello, world"'
    );
    results.errorCount.should.equal(5);
    results.rules.should.deep.equal([
      'camelcase', 'no-unused-vars', 'quotes', 'eol-last', 'semi'
    ]);
  });
});

