"use strict";

module.exports = {
  rules: {
    // disallow use of eval()
    "no-eval": "error",

    // disallow use of eval()-like methods
    "no-implied-eval": "error",

    // disallow use of javascript: urls.
    "no-script-url": "error",

    // Require the "use strict" pragma, either at the global level or function level,
    // depending on whether CommonJS is being used or not
    strict: [
      "error",
      "safe",
    ],

  }
};
