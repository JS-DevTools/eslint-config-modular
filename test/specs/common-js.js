'use strict';

const ESLint = require('../fixtures/eslint');
const chai = require('chai');
chai.should();

describe('common-js', function () {
  it('should not be enforced if module is not used', function () {
    let results = ESLint.run('modular/style', 'foo(); function foo () {}\n');
    results.errorCount.should.equal(0);
  });

  it('should require the "use strict" pragma at the global level', function () {
    let results = ESLint.run('modular/common-js', 'function foo () {} foo();');
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(['strict']);
    results.messages[0].message.should.equal("Use the global form of 'use strict'.");
  });

  it('should not allow ES6 module syntax', function () {
    let results = ESLint.run('modular/common-js', "import foo from 'bar';");
    results.errorCount.should.equal(1);
    results.messages.should.have.lengthOf(1);
    results.messages[0].message.should.equal("Parsing error: The keyword 'import' is reserved");
  });
});

