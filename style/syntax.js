"use strict";

module.exports = {
  rules: {
    // encourages use of dot notation whenever possible
    "dot-notation": "error",

    // disallow the omission of parentheses when invoking a constructor with no arguments
    "new-parens": "error",

    // disallow use of arguments.caller or arguments.callee
    "no-caller": "error",

    // disallow use of labeled statements
    "no-labels": "error",

    // disallow use of multiline strings
    "no-multi-str": "error",

    // disallow usage of __proto__ property
    "no-proto": "error",

    // disallow use of comma operator
    "no-sequences": "error",

    // disallow shadowing of names such as arguments
    "no-shadow-restricted-names": "error",

    // disallow use of undefined when initializing variables
    "no-undef-init": "error",

    // disallow multi-line statements that could be confused for separte ASI statements
    "no-unexpected-multiline": "error",

    // disallow the use of ternary operators when a simpler alternative exists
    "no-unneeded-ternary": "error",

    // disallow unnecessary .call() and .apply()
    "no-useless-call": "error",

    // disallow unnecessary concatenation of string literals
    "no-useless-concat": "error",

    // disallow use of void operator
    "no-void": "error",

    // disallow use of the with statement
    "no-with": "error",

    // require assignment operator shorthand where possible
    "operator-assignment": "error",

    // disallow Yoda conditions
    yoda: "error",

  }
};
