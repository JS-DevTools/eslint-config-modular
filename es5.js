'use strict';

module.exports = {
  env: {
    es6: false,
  },

  parser: 'espree',

  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
    ecmaFeatures: {
      impliedStrict: false,
    },
  },

  rules: {
    // use `var`, not `let` or `const`
    'no-var': 'off',

    // ES5 doesn't support method and property shorthand syntax for object literals
    'object-shorthand': 'off',

    // Don't recommend ES6 language features
    'prefer-arrow-callback': 'off',
    'prefer-spread': 'off',
    'prefer-template': 'off',

    // Require the "use strict" pragma at the global level
    // (CommonJS, Rollup, Browserify, etc. wrap code in an IIFE)
    strict: [
      'error',
      'global',
    ],
  }
};
