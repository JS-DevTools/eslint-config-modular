'use strict';

const ESLint = require('../fixtures/eslint');
const chai = require('chai');
chai.should();

describe('style', function () {
  it('should not be enforced if module is not used', function () {
    let results = ESLint.run('modular/browser',
      'var My_Variable = "hello, world"'
    );
    results.errorCount.should.equal(0);
  });

  it('should require camel-case variable names', function () {
    let results = ESLint.run('modular/style',
      'var My_Variable = "hello, world";\n'
    );
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(['camelcase']);
  });

  it('should require double quotes for strings', function () {
    let results = ESLint.run('modular/style',
      "var myVariable = 'hello, world';\n"
    );
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(['quotes']);
  });

  it('should require semi-colons', function () {
    let results = ESLint.run('modular/style',
      'var myVariable = "hello, world"\n'
    );
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(['semi']);
  });

  it('should require a newline at the end of the file', function () {
    let results = ESLint.run('modular/style',
      'var myVariable = "hello, world";'
    );
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(['eol-last']);
  });

});
