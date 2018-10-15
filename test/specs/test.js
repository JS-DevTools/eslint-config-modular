"use strict";

const ESLint = require("../fixtures/eslint");
const chai = require("chai");
chai.should();

describe("test", function () {
  it("should not be enforced if module is not used", function () {
    let results = ESLint.run("modular/style",
      "expect(true).to.be.true;\n"
    );
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(["no-unused-expressions"]);
  });

  it("should allow Mocha globals", function () {
    let results = ESLint.run(
      [
        "modular/best-practices",  // This module disallows undefined globals
        "modular/test"             // This module defines Mocha globals
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
        "modular/style",        // This module disallows unused expressions
        "modular/test"          // This module allows unused expressions
      ],

      "expect(true).to.be.true;\n"
    );
    results.errorCount.should.equal(0);
  });
});

