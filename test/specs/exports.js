'use strict';

var chai = require('chai');
var expect = chai.expect;
chai.should();

describe('Module exports', function () {
  describe('index', function () {
    var index = require('../../');

    it('should be an object', function () {
      expect(index).to.be.an('object');
    });

    it('should extend other modules', function () {
      index.should.have.keys('extends');
      index.extends.should.be.an('array');
    });

    it('should not contain any rules', function () {
      index.should.not.have.keys('rules');
    });
  });

  var modules = ['best-practices', 'browser', 'es5', 'es6', 'jsx', 'node', 'style', 'test'];
  modules.forEach(function (moduleName) {
    var module = require('../../' + moduleName);

    describe(moduleName, function () {
      it('should be an object', function () {
        expect(module).to.be.an('object');
      });

      it('should only contain valid ESLint settings', function () {
        module.should.contain.any.keys('env', 'rules', 'parser', 'parserOptions');
      });

      it('should contain rules in alphabetical order', function () {
        var rules = Object.keys(module.rules);
        var sortedRules = rules.slice().sort();
        rules.should.deep.equal(sortedRules);
      });

      it('should have valid settings for each rule', function () {
        Object.keys(module.rules).forEach(function (ruleName) {
          var rule = module.rules[ruleName];
          var level = Array.isArray(rule) ? rule[0] : rule;

          expect(level).to.be.a('string');
          expect(level).to.be.oneOf(['off', 'warn', 'error'], ruleName);
        });
      });
    });
  });
});
