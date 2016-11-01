'use strict';

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    // require double for JSX attributes
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],

  }
};
