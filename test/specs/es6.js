'use strict';

var ESLint = require('../fixtures/eslint');
var chai = require('chai');
chai.should();

describe('es6', function () {
  it('should not be enforced if module is not used', function () {
    var results = ESLint.run('modular/browser',
      'var foo = 5;\n' +
      'var bar = { foo: foo };'
    );
    results.errorCount.should.equal(0);
  });

  it('should be enforced if module is used', function () {
    var results = ESLint.run('modular/es6',
      'const foo = 5;\n' +
      'var bar = { foo: foo };'
    );
    results.errorCount.should.equal(1);
    results.warningCount.should.equal(1);
    results.rules.should.deep.equal(['no-var', 'object-shorthand']);
  });
});

