'use strict';

module.exports = {
  env: {
    browser: true,
  },

  rules: {
    // disallow the use of alert, confirm, and prompt
    'no-alert': 'warn',

    // Require the "use strict" pragma at the function level,
    // to avoid problems with loose scripts
    strict: [
      'error',
      'function',
    ],
  }
};
