'use strict';

const ESLint = require('../fixtures/eslint');
const chai = require('chai');
chai.should();

describe('es6', function () {
  it('should not be enforced if module is not used', function () {
    let results = ESLint.run('modular/browser',
      'var foo = 5;\n' +
      'var bar = { foo: foo };'
    );
    results.errorCount.should.equal(0);
  });

  it('should not allow ES6 module syntax unless the "es6-modules" module is also used', function () {
    let results = ESLint.run('modular/es6', "import foo from 'bar';");
    results.errorCount.should.equal(1);
    results.messages.should.have.lengthOf(1);
    results.messages[0].message.should.equal("Parsing error: 'import' and 'export' may appear only with 'sourceType: module'");
  });

  it('should not allow the `var` keyword', function () {
    let results = ESLint.run('modular/es6', 'var foo = "bar";');
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(['no-var']);
  });

  it('should suggest object shorthand notation', function () {
    let results = ESLint.run('modular/es6',
      'const foo = "foo";\n' +
      'let bar = { foo: foo };'
    );
    results.errorCount.should.equal(0);
    results.warningCount.should.equal(1);
    results.rules.should.deep.equal(['object-shorthand']);
  });
});

