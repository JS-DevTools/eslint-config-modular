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

  it('should not allow the "use strict" pragma if followed by the "es6" module', function () {
    var results = ESLint.run(
      ['modular/node', 'modular/es6'],
      '"use strict";'
    );
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(['strict']);
    results.messages[0].message.should.equal("'use strict' is unnecessary inside of modules.");
  });

  it('should allow the "use strict" pragma if followed by the "es6" and "common-js" modules', function () {
    var results = ESLint.run(
      ['modular/node', 'modular/es6', 'modular/common-js'],
      '"use strict";'
    );
    results.errorCount.should.equal(0);
  });

  it('should not allow ES6 module syntax', function () {
    var results = ESLint.run('modular/node', "import foo from 'bar';");
    results.errorCount.should.equal(1);
    results.messages.should.have.lengthOf(1);
    results.messages[0].message.should.equal("Parsing error: The keyword 'import' is reserved");
  });

  it('should allow ES6 module syntax if followed by the "es6" module', function () {
    var results = ESLint.run(
      ['modular/node', 'modular/es6'],
      "import foo from 'bar';"
    );
    results.errorCount.should.equal(0);
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

