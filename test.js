'use strict';

module.exports = {
  env: {
    mocha: true,
    jasmine: true,
  },

  globals: {
    // Chai.js
    chai: false,
    assert: false,
    expect: false,

    // Sinon.js
    sinon: false,
  },

  rules: {
    // Chai.js property syntax erroneously triggers this rule
    'no-unused-expressions': 'off',

    // Mocha callbacks are bound to the test/hook object
    'prefer-arrow-callback': 'off',
  }
};
