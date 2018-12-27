"use strict";

const path = require("path");
const chai = require("chai");
const glob = require("glob");
const manifest = require("../../package.json");

const expect = chai.expect;
chai.should();

const modules = [].concat(
  glob.sync("*.js"),
  glob.sync("*/*.js")
);

describe("Module exports", function () {
  describe("index", function () {
    const index = require("../../");

    it("should be an object", function () {
      expect(index).to.be.an("object");
    });

    it("should extend other modules", function () {
      index.should.have.keys("extends");
      index.extends.should.be.an("array");
    });

    it("should not contain any rules", function () {
      index.should.not.have.keys("rules");
    });
  });

  for (let moduleName of modules) {
    const module = require("../../" + moduleName);
    const rules = Object.keys(module.rules || {});

    describe(moduleName, function () {
      it("should be included in the package.json file", () => {
        for (let file of manifest.files) {
          if (file === moduleName) {
            // This file is explicitly included in the package.json
            return;
          }
          else if (file === path.dirname(moduleName)) {
            // This file's parent directory is included in the package.json
            return;
          }
        }

        expect(manifest.files).to.include(moduleName);
      });

      it("should export an object", function () {
        expect(module).to.be.an("object");
      });

      it("should only contain valid ESLint settings", function () {
        module.should.contain.any.keys("extends", "env", "rules", "parser", "parserOptions");
      });

      it("should contain rules in alphabetical order", function () {
        let sortedRules = rules.slice().sort();
        rules.should.deep.equal(sortedRules);
      });

      it("should have valid settings for each rule", function () {
        for (let ruleName of rules) {
          let rule = module.rules[ruleName];
          let level = Array.isArray(rule) ? rule[0] : rule;

          expect(level).to.be.a("string");
          expect(level).to.be.oneOf(["off", "warn", "error"], ruleName);
        }
      });
    });
  }
});
