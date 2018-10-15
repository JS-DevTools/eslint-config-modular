"use strict";

const ESLint = require("../fixtures/eslint");
const chai = require("chai");
chai.should();

describe("jsx", function () {
  it("should not be enforced if module is not used", function () {
    let results = ESLint.run("modular/node",
      "var foo = <div className='some-class'>hello, world</div>;"
    );
    results.errorCount.should.equal(1);
    results.messages[0].message.should.equal("Parsing error: Unexpected token <");
  });

  it("should require double quotes for JSX attributes", function () {
    let results = ESLint.run(["modular/es6", "modular/jsx"],
      "let foo = <div className='some-class'>hello, world</div>;"
    );
    results.errorCount.should.equal(1);
    results.rules.should.deep.equal(["jsx-quotes"]);
  });
});

