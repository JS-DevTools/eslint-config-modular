'use strict';

module.exports = {
  env: {
    es6: true,
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },

  rules: {
    // disallow modifying variables of class declarations
    'no-class-assign': 'error',

    // disallow modifying variables that are declared using const
    'no-const-assign': 'error',

    // disallow use of constant expressions in conditions
    'no-constant-condition': 'error',

    // disallow duplicate name in class members
    'no-dupe-class-members': 'error',

    // disallow template literals in normal strings
    'no-template-curly-in-string': 'error',

    // disallow use of this/super before calling super() in constructors.
    'no-this-before-super': 'error',

    // require let or const instead of var
    'no-var': 'error',

    // require method and property shorthand syntax for object literals
    'object-shorthand': 'warn',

    // disallow generator functions that do not have yield
    'require-yield': 'error',
  }
};
