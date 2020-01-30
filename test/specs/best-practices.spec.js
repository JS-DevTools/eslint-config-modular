"use strict";

const ESLint = require("../utils/eslint");
const chai = require("chai");
chai.should();

describe("best-practices", function () {
  it("should not be enforced if module is not used", function () {
    let results = ESLint.run("modular/browser", "5 == 4");
    results.errorCount.should.equal(0);
  });

  it("should require strict equality comparisons", function () {
    let results = ESLint.run("modular/best-practices", "5 == 4");
    results.errorCount.should.equal(2);
    results.rules.should.deep.equal(["no-unused-expressions", "eqeqeq"]);
  });

  it('should require the "use strict" pragma at the function level by default', function () {
    let results = ESLint.run("modular/best-practices", "function foo () {} foo();");
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(["strict"]);
    results.messages[0].message.should.equal("Use the function form of 'use strict'.");
  });

  it('should require the "use strict" pragma at the global level for CommonJS', function () {
    let results = ESLint.run(["modular/best-practices", "modular/modules/cjs"], "function foo () {} foo();");
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(["strict"]);
    results.messages[0].message.should.equal("Use the global form of 'use strict'.");
  });
});
