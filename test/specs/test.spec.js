"use strict";

const ESLint = require("../utils/eslint");
const chai = require("chai");
chai.should();

describe("test", function () {
  it("should not be enforced if module is not used", function () {
    let results = ESLint.run("@jsdevtools/modular/best-practices",
      "expect(true).to.be.true;\n"
    );
    results.errorCount.should.equal(2);
    results.rules.should.deep.equal(["no-unused-expressions", "no-undef"]);
  });

  it("should allow Mocha globals", function () {
    let results = ESLint.run(
      [
        "@jsdevtools/modular/best-practices",  // This module disallows undefined globals
        "@jsdevtools/modular/test"             // This module defines Mocha globals
      ],

      "beforeEach();\n" +
      "afterEach();\n" +
      "describe();\n" +
      "it();\n"
    );
    results.errorCount.should.equal(0);
  });

  it("should allow Chai.js property syntax", function () {
    let results = ESLint.run(
      [
        "@jsdevtools/modular/style",        // This module disallows unused expressions
        "@jsdevtools/modular/test"          // This module allows unused expressions
      ],

      "expect(true).to.be.true;\n"
    );
    results.errorCount.should.equal(0);
  });
});
