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

  it('should not allow the `var` keyword', function () {
    var results = ESLint.run('modular/es6', 'var foo = "bar";');
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(['no-var']);
  });

  it('should suggest object shorthand notation', function () {
    var results = ESLint.run('modular/es6',
      'const foo = "foo";\n' +
      'let bar = { foo: foo };'
    );
    results.errorCount.should.equal(0);
    results.warningCount.should.equal(1);
    results.rules.should.deep.equal(['object-shorthand']);
  });
});

