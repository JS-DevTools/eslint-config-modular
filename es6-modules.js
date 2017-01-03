'use strict';

module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },

  rules: {
    // Don't allow the "use strict" pragma, since ES6 modules are always
    // in strict mode, and the pragma is illegal in combination with some
    // ES6 features (e.g. default values in function parameters)
    strict: [
      'error',
      'never',
    ],
  }
};
