'use strict';

var CLIEngine = require('eslint').CLIEngine;

/**
 * Runs ESLint on the specified code, using the specified modules.
 */
exports.run = function (modules, code) {
  // Configure ESLint to use the specified modules
  var cli = new CLIEngine({
    useEslintrc: false,
    baseConfig: {
      extends: modules,
    },
  });

  // Run ESLint on the code
  var report = cli.executeOnText(code);

  // Determine which rules were violated
  var results = report.results[0];
  results.rules = results.messages.map(function (msg) {
    return msg.ruleId;
  });

  return results;
};
