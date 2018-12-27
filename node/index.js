"use strict";

module.exports = {
  extends: "modular/modules/cjs",

  env: {
    node: true,
  },

  rules: {
    // disallow use of new operator with the require function
    "no-new-require": "error",

    // disallow string concatenation with __dirname and __filename
    "no-path-concat": "error",
  }
};
