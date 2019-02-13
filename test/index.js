"use strict";

module.exports = {
  env: {
    mocha: true,
    jasmine: true,
  },

  rules: {
    // Chai.js property syntax erroneously triggers this rule
    "no-unused-expressions": "off",

    // Mocha callbacks are bound to the test/hook object
    "prefer-arrow-callback": "off",
  }
};
