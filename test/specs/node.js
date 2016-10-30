'use strict';

var ESLint = require('../fixtures/eslint');
var chai = require('chai');
chai.should();

describe('node', function () {
  it('should not be enforced if module is not used', function () {
    var results = ESLint.run('modular/browser',
      "var foo = new require(__dirname + '/some-module');"
    );
    results.errorCount.should.equal(0);
  });

  it('should be enforced if module is used', function () {
    var results = ESLint.run('modular/node',
      "var foo = new require(__dirname + '/some-module');"
    );
    results.errorCount.should.equal(2);
    results.rules.should.have.members(['no-path-concat', 'no-new-require']);
  });
});

