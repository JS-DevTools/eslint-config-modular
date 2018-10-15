"use strict";

const ESLint = require("../fixtures/eslint");
const chai = require("chai");
chai.should();

describe("es6-modules", function () {
  it("should not be enforced if module is not used", function () {
    let results = ESLint.run("modular/es6",
      "const foo = 5;\n" +
      "let bar = { foo: foo };"
    );
    results.errorCount.should.equal(0);
  });

  it('should not allow the "use strict" pragma', function () {
    let results = ESLint.run("modular/es6-modules", '"use strict";');
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(["strict"]);
    results.messages[0].message.should.equal("'use strict' is unnecessary inside of modules.");
  });

  it("should allow ES6 module syntax", function () {
    let results = ESLint.run(
      ["modular/es6", "modular/es6-modules"],
      "import foo from 'bar';"
    );
    results.errorCount.should.equal(0);
  });

  it('should not allow ES6 module syntax if followed by the "common-js" module', function () {
    let results = ESLint.run(
      ["modular/es6", "modular/es6-modules", "modular/common-js"],
      "import foo from 'bar';"
    );
    results.errorCount.should.equal(1);
    results.messages.should.have.lengthOf(1);
    results.messages[0].message.should.equal("Parsing error: 'import' and 'export' may appear only with 'sourceType: module'");
  });
});

