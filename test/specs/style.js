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

  it('should require camel-case variable names', function () {
    var results = ESLint.run('modular/style',
      "var My_Variable = 'hello, world';\n"
    );
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(['camelcase']);
  });

  it('should require single quotes for strings', function () {
    var results = ESLint.run('modular/style',
      'var myVariable = "hello, world";\n'
    );
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(['quotes']);
  });

  it('should require semi-colons', function () {
    var results = ESLint.run('modular/style',
      "var myVariable = 'hello, world'\n"
    );
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(['semi']);
  });

  it('should require a newline at the end of the file', function () {
    var results = ESLint.run('modular/style',
      "var myVariable = 'hello, world';"
    );
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(['eol-last']);
  });
});

