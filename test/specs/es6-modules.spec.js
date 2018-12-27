"use strict";

const ESLint = require("../fixtures/eslint");
const chai = require("chai");
chai.should();

describe("modules/esm", function () {
  it("should not be enforced if module is not used", function () {
    let results = ESLint.run("modular/es6",
      "const foo = 5;\n" +
      "let bar = { foo: foo };"
    );
    results.errorCount.should.equal(0);
  });

  it('should not allow the "use strict" pragma', function () {
    let results = ESLint.run("modular/modules/esm", '"use strict";');
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(["strict"]);
    results.messages[0].message.should.equal("'use strict' is unnecessary inside of modules.");
  });

  it("should allow ES6 module syntax", function () {
    let results = ESLint.run(
      ["modular/es6", "modular/modules/esm"],
      "import foo from 'bar';"
    );
    results.errorCount.should.equal(0);
  });

  it('should not allow ES6 module syntax if followed by the "modules/cjs" module', function () {
    let results = ESLint.run(
      ["modular/es6", "modular/modules/esm", "modular/modules/cjs"],
      "import foo from 'bar';"
    );
    results.errorCount.should.equal(1);
    results.messages.should.have.lengthOf(1);
    results.messages[0].message.should.equal("Parsing error: 'import' and 'export' may appear only with 'sourceType: module'");
  });
});
