'use strict';

module.exports = {
  parserOptions: {
    sourceType: 'script',
    ecmaFeatures: {
      impliedStrict: false,
    },
  },

  rules: {
    // Require the "use strict" pragma at the global level,
    // since CommonJS modules are wrapped in an IIFE
    strict: [
      'error',
      'global',
    ],
  }
};
