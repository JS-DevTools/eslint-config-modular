'use strict';

module.exports = {
  parserOptions: {
    sourceType: 'script',
    ecmaFeatures: {
      impliedStrict: false,
    },
  },

  env: {
    commonjs: true,
  },

  rules: {
    // Require the "use strict" pragma at the global level,
    // since CommonJS modules are wrapped in a function
    strict: [
      'error',
      'global',
    ],
  }
};
