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

  it('should not allow the "use strict" pragma', function () {
    var results = ESLint.run('modular/es6', '"use strict";');
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(['strict']);
    results.messages[0].message.should.equal("'use strict' is unnecessary inside of modules.");
  });

  it('should allow the "use strict" pragma if followed by the "common-js" module', function () {
    var results = ESLint.run(
      ['modular/es6', 'modular/common-js'],
      '"use strict";'
    );
    results.errorCount.should.equal(0);
  });

  it('should allow ES6 module syntax', function () {
    var results = ESLint.run('modular/es6', "import foo from 'bar';");
    results.errorCount.should.equal(0);
  });

  it('should not allow ES6 module syntax if followed by the "common-js" module', function () {
    var results = ESLint.run(
      ['modular/es6', 'modular/common-js'],
      "import foo from 'bar';"
    );
    results.errorCount.should.equal(1);
    results.messages.should.have.lengthOf(1);
    results.messages[0].message.should.equal("Parsing error: 'import' and 'export' may appear only with 'sourceType: module'");
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

