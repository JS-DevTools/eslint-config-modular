"use strict";

const ESLint = require("../fixtures/eslint");
const chai = require("chai");
chai.should();

describe("browser", function () {
  it("should not be enforced if module is not used", function () {
    let results = ESLint.run("modular/style", 'alert("hello, world");\n');
    results.errorCount.should.equal(0);
  });

  it("should warn about `alert()` statements", function () {
    let results = ESLint.run("modular/browser", 'alert("hello, world")');
    results.warningCount.should.equal(1);
    results.rules.should.deep.equal(["no-alert"]);
  });

  it('should require the "use strict" pragma at the function level', function () {
    let results = ESLint.run("modular/browser", "function foo () {} foo();");
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(["strict"]);
    results.messages[0].message.should.equal("Use the function form of 'use strict'.");
  });

  it('should require the "use strict" pragma at the global level if the CommonJS module is loaded after', function () {
    let results = ESLint.run(["modular/browser", "modular/common-js"], "function foo () {} foo();");
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(["strict"]);
    results.messages[0].message.should.equal("Use the global form of 'use strict'.");
  });

  it('should not allow the "use strict" pragma at the global level', function () {
    let results = ESLint.run("modular/browser", '"use strict"; function foo () {} foo();');
    results.errorCount.should.equal(2);
    results.rules.should.deep.equal(["strict", "strict"]);
    results.messages[0].message.should.equal("Use the function form of 'use strict'.");
    results.messages[1].message.should.equal("Use the function form of 'use strict'.");
  });
});
