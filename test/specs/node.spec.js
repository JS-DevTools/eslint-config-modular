"use strict";

const ESLint = require("../utils/eslint");
const chai = require("chai");
chai.should();

describe("node", function () {
  it("should not be enforced if module is not used", function () {
    let results = ESLint.run("modular/browser",
      "var foo = new require(__dirname + '/some-module');"
    );
    results.errorCount.should.equal(0);
  });

  it('should require the "use strict" pragma at the global level', function () {
    let results = ESLint.run(
      ["modular/best-practices", "modular/node"],
      "var foo = 5; console.log(foo);"
    );
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(["strict"]);
    results.messages[0].message.should.equal("Use the global form of 'use strict'.");
  });

  it('should not allow the "use strict" pragma if followed by the "modules/esm" module', function () {
    let results = ESLint.run(
      ["modular/best-practices", "modular/node", "modular/modules/esm"],
      '"use strict";'
    );
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(["strict"]);
    results.messages[0].message.should.equal("'use strict' is unnecessary inside of modules.");
  });

  it("should not allow ES6 module syntax", function () {
    let results = ESLint.run("modular/node", "import foo from 'bar';");
    results.errorCount.should.equal(1);
    results.messages.should.have.lengthOf(1);
    results.messages[0].message.should.equal("Parsing error: The keyword 'import' is reserved");
  });

  it('should allow ES6 module syntax if followed by the "modules/esm" module', function () {
    let results = ESLint.run(
      ["modular/node", "modular/modules/esm"],
      "import foo from 'bar';"
    );
    results.errorCount.should.equal(0);
  });

  it("should not allow `new require()` syntax", function () {
    let results = ESLint.run("modular/node",
      "'use strict';\n" +
      "var foo = new require('some-module');\n"
    );
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(["no-new-require"]);
  });

  it("should not allow string concatenation with __dirname", function () {
    let results = ESLint.run("modular/node",
      "'use strict';\n" +
      "var foo = __dirname + '/some-file';\n"
    );
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(["no-path-concat"]);
  });
});
