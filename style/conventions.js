"use strict";

module.exports = {
  rules: {
    // specify curly brace conventions for all control statements
    curly: "error",

    // enforce use of function declarations
    "func-style": [
      "error",
      "declaration",
    ],

    // disallow throwing non-Error objects
    "no-throw-literal": "error",

    // disallow quotes around object literal property names
    "quote-props": [
      "warn",
      "as-needed",
    ],

    // require single quotes for all strings
    quotes: [
      "error",
      "double",
      "avoid-escape",
    ],

    // require use of semicolons instead of ASI
    semi: "error",

  }
};
