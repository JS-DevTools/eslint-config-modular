"use strict";

const ESLint = require("../utils/eslint");
const chai = require("chai");
chai.should();

describe("es5", function () {
  it("should not be enforced if module is not used", function () {
    let results = ESLint.run("modular/browser", "var foo = 5;");
    results.errorCount.should.equal(0);
  });

  it("should not allow ES6 module syntax", function () {
    let results = ESLint.run("modular/es5", "import foo from 'bar';");
    results.errorCount.should.equal(1);
    results.messages.should.have.lengthOf(1);
    results.messages[0].message.should.equal("Parsing error: The keyword 'import' is reserved");
  });

  it("should not allow ES6 syntax", function () {
    let results = ESLint.run("modular/es5", "const foo = 'bar';");
    results.errorCount.should.equal(1);
    results.messages.should.have.lengthOf(1);
    results.messages[0].message.should.equal("Parsing error: The keyword 'const' is reserved");
  });
});
