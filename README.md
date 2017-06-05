Modular ESLint Configuration
=======================

[![Build Status](https://api.travis-ci.org/BigstickCarpet/eslint-config-modular.svg?branch=master)](https://travis-ci.org/BigstickCarpet/eslint-config-modular)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/bigstickcarpet/eslint-config-modular?svg=true&branch=master&failingText=Windows%20build%20failing&passingText=Windows%20build%20passing)](https://ci.appveyor.com/project/BigstickCarpet/eslint-config-modular/branch/master)
[![Dependencies](https://david-dm.org/BigstickCarpet/eslint-config-modular/dev-status.svg)](https://david-dm.org/BigstickCarpet/eslint-config-modular?type=dev)

[![npm](https://img.shields.io/npm/v/eslint-config-modular.svg?maxAge=43200)](https://www.npmjs.com/package/eslint-config-modular)
[![License](https://img.shields.io/npm/l/eslint-config-modular.svg?maxAge=2592000)](LICENSE)

`eslint-config-modular` is a [shareable config](http://eslint.org/docs/developer-guide/shareable-configs) for [ESLint](http://eslint.org/) that's broken-up into different modules for different types of JavaScript projects (browser, Node, ES5, ES6, etc.).  These modules can be used individually or in combination to match the needs of your project.

Each module defines rules that are meant to be reasonable defaults and best practices, but you can easily extend or override any of the rules to suit your needs.

Installation
-----------------------
Run the following [NPM](https://docs.npmjs.com/getting-started/what-is-npm) command to install [ESLint](http://eslint.org/) and `eslint-config-modular` as dev-dependencies of your project:

```bash
npm install eslint eslint-config-modular --save-dev
```

Usage
-----------------------
Shareable configs are designed to work with the `extends` feature of `.eslintrc` files. You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

To use `eslint-config-modular` in your project, create an `.eslintrc.yml` file with the following contents:

**.eslintrc.yml**
```yaml
extends:
  # These modules would be good for a Node.js project written in ES5
  - modular/best-practices
  - modular/style
  - modular/node
  - modular/es5

rules:
  # You can override or extend the rules here
```

Modules
-----------------------
`eslint-config-modular` includes the following modules.  Mix-and-match them as applicable to your project.

### `modular/best-practices` <small>[(source)](./best-practices.js)</small>
This module contains rules that enforce good JavaScript coding practices, such as [avoiding the `eval()` statement](http://eslint.org/docs/rules/no-eval), not [reassigning native objects](http://eslint.org/docs/rules/no-native-reassign), and [using `===` instead of `==`](http://eslint.org/docs/rules/eqeqeq) for comparisons. Most of the rules in this file will raise an error if violated, but some less-severe ones will only raise warnings.

### `modular/browser` <small>[(source)](./browser.js)</small>
This module configures ESLint to recognize browser globals, such as `window`, `document`, `navigator`, etc.  It also contains rules that are specific to projects that are intended to run in web browsers, such as [avoiding the `alert()` statement](http://eslint.org/docs/rules/no-alert) and [requiring the `use strict` directive within a function](http://www.ecma-international.org/ecma-262/6.0/#sec-directive-prologues-and-the-use-strict-directive).

### `modular/node` <small>[(source)](./node.js)</small>
This module configures ESLint to recognize Node.js globals, such as `process`, `__dirname`, `Buffer`, etc.  It also contains rules that are specific to Node.js projects, such as [avoding `new require()` syntax](http://eslint.org/docs/rules/no-new-require) and [disallowing concatenation with `__dirname`](http://eslint.org/docs/rules/no-path-concat).

### `modular/es5` <small>[(source)](./es5.js)</small>
This module configures ESLint to parse EcmaScript 5 code. It also disables ES6-specific rules, such as [using `let` instead of `var`](http://eslint.org/docs/rules/no-var).

### `modular/es6` <small>[(source)](./es6.js)</small>
This module configures ESLint to parse EcmaScript 6 (and newer) code. It also contains ES6-specific rules, such as [not assigning to constants](http://eslint.org/docs/rules/no-const-assign), [calling `super()` in constructors](http://eslint.org/docs/rules/no-this-before-super), and [using `let` instead of `var`](http://eslint.org/docs/rules/no-var).

### `modular/es6-modules` <small>[(source)](./es6-modules.js)</small>
This module configures ESLint to parse your JavaScript files with [ES6 module semantics](http://www.ecma-international.org/ecma-262/6.0/#sec-module-semantics) rather than [script semantics](http://www.ecma-international.org/ecma-262/6.0/#sec-scripts-static-semantics-early-errors).  It also disallows [the `use strict` directive](http://www.ecma-international.org/ecma-262/6.0/#sec-directive-prologues-and-the-use-strict-directive), since ES6 modules are always strict.

### `modular/common-js` <small>[(source)](./common-js.js)</small>
This module configures ESLint to parse your JavaScript files with [script semantics](http://www.ecma-international.org/ecma-262/6.0/#sec-scripts-static-semantics-early-errors) rather than [ES6 module semantics](http://www.ecma-international.org/ecma-262/6.0/#sec-module-semantics), since CommonJS modules are not "true" JavaScript modules.

### `modular/jsx` <small>[(source)](./jsx.js)</small>
This module configures ESLint to parse [JSX syntax](https://facebook.github.io/react/docs/jsx-in-depth.html). It also contains JSX-specific rules, such as enforcing the use of [double-quotes in JSX attributes](http://eslint.org/docs/rules/jsx-quotes).

### `modular/style` <small>[(source)](./style.js)</small>
This module contains code-styling and consistency rules, such as [single-quotes](http://eslint.org/docs/rules/quotes), [two-space indentation](http://eslint.org/docs/rules/indent), and [semi-colons](http://eslint.org/docs/rules/semi).  Obviously, the rules in this module are entirely subjective and reflect my personal preferences. You are free to override or extend these rules as you desire, or not use this module at all.

### `modular/test` <small>[(source)](./test.js)</small>
This module configures ESLint to recognize globals that are defined by common test frameworks, such as `describe`, `it`, `beforeEach`, `assert`, `expect`, etc.  It also disables rules that tend to cause problems with certain test frameworks.

> **Note:** I recommend that you create a separate `.eslintrc.yml` file in your test folder. That way, it can use different modules and rules than the rest of your codebase.

