'use strict';

var ESLint = require('../fixtures/eslint');
var chai = require('chai');
chai.should();

describe('es5', function () {
  it('should not be enforced if module is not used', function () {
    var results = ESLint.run('modular/browser', 'var foo = 5;');
    results.errorCount.should.equal(0);
  });

  it('should require the "use strict" pragma', function () {
    var results = ESLint.run('modular/es5', 'var foo = 5;');
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(['strict']);
  });

  it('should not allow ES6 module syntax', function () {
    var results = ESLint.run('modular/es5', "import foo from 'bar';");
    results.errorCount.should.equal(1);
    results.messages.should.have.lengthOf(1);
    results.messages[0].message.should.equal("Parsing error: The keyword 'import' is reserved");
  });

  it('should not allow ES6 syntax', function () {
    var results = ESLint.run('modular/es5', "const foo = 'bar';");
    results.errorCount.should.equal(1);
    results.messages.should.have.lengthOf(1);
    results.messages[0].message.should.equal("Parsing error: The keyword 'const' is reserved");
  });
});

