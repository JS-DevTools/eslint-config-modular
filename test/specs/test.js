'use strict';

var ESLint = require('../fixtures/eslint');
var chai = require('chai');
chai.should();

describe('test', function () {
  it('should not be enforced if module is not used', function () {
    var results = ESLint.run('modular/style',
      'var foo = true;\n' +
      'expect(foo).to.be.true;\n'
    );
    results.errorCount.should.equal(2);
    results.rules.should.have.members(['no-undef', 'no-unused-expressions']);
  });

  it('should be enforced if module is used', function () {
    var results = ESLint.run(['modular/style', 'modular/test'],
      'var foo = true;\n' +
      'expect(foo).to.be.true;\n'
    );
    results.errorCount.should.equal(0);
  });
});

