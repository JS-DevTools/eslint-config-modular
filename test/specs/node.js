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

  it('should require the "use strict" pragma', function () {
    var results = ESLint.run('modular/node', 'var foo = 5;');
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(['strict']);
  });

  it('should not allow `new require()` syntax', function () {
    var results = ESLint.run('modular/node',
      "'use strict';\n" +
      "var foo = new require('some-module');\n"
    );
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(['no-new-require']);
  });

  it('should not allow string concatenation with __dirname', function () {
    var results = ESLint.run('modular/node',
      "'use strict';\n" +
      "var foo = __dirname + '/some-file';\n"
    );
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(['no-path-concat']);
  });
});

