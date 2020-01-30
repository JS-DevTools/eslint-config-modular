Modular ESLint Configuration
=======================

[![Cross-Platform Compatibility](https://jstools.dev/img/badges/os-badges.svg)](https://github.com/JS-DevTools/eslint-config-modular/blob/master/.github/workflows/CI-CD.yaml)
[![Build Status](https://github.com/JS-DevTools/eslint-config-modular/workflows/CI-CD/badge.svg)](https://github.com/JS-DevTools/eslint-config-modular/blob/master/.github/workflows/CI-CD.yaml)

[![Coverage Status](https://coveralls.io/repos/github/JS-DevTools/eslint-config-modular/badge.svg?branch=master)](https://coveralls.io/github/JS-DevTools/eslint-config-modular)
[![Dependencies](https://david-dm.org/JS-DevTools/eslint-config-modular/dev-status.svg)](https://david-dm.org/JS-DevTools/eslint-config-modular?type=dev)

[![npm](https://img.shields.io/npm/v/eslint-config-modular.svg?maxAge=43200)](https://www.npmjs.com/package/eslint-config-modular)
[![License](https://img.shields.io/npm/l/eslint-config-modular.svg?maxAge=2592000)](LICENSE)

ESLint Modular is a [shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for [ESLint](https://eslint.org/) that's broken-up into different modules that can be mixed-and-matched to match the needs of your project.

Each module defines rules that are meant to be reasonable defaults and best practices, but you can easily extend or override any of the rules to suit your needs.



Related Projects
-----------------------
- [tslint-modular](https://jstools.dev/tslint-modular/)<br>
  Modular TSLint configuration for TypeScript projects



Installation
-----------------------
Run the following [npm](https://docs.npmjs.com/about-npm/) command to install [ESLint](https://eslint.org/) and ESLint Modular as dev-dependencies of your project:

```bash
npm install eslint eslint-config-modular --save-dev
```



Usage
-----------------------
Shareable configs are designed to work with the `extends` feature of `.eslintrc` files. You can learn more about
[Shareable Configs](https://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

To use ESLint Modular in your project, create an `.eslintrc.yml` file with the following contents:

**.eslintrc.yml**
```yaml
extends:
  # These modules would be good for a Node.js project written in ES5
  - modular/best-practices
  - modular/style
  - modular/node
  - modular/es5

rules:
  # You can override or extend any rules here
```



Modules
-----------------------
`eslint-config-modular` includes the following modules.  Mix-and-match them as applicable to your project.

### `modular/best-practices` <small>[(source)](./best-practices/index.js)</small>
This module contains rules that prevent accidental bugs, insecure code, and bad coding practices.  You can use this module directly, or use any/all of its sub-modules.

#### `modular/best-practices/bugs` <small>[(source)](./best-practices/bugs.js)</small>
The rules in this module prevent syntax that is likely to lead to accidental bugs or runtime errors.  Examples include not [reassigning native objects](https://eslint.org/docs/rules/no-native-reassign), and [using `===` instead of `==`](https://eslint.org/docs/rules/eqeqeq) for comparisons. Most of the rules in this file will raise an error if violated, but some less-severe ones will only raise warnings.

#### `modular/best-practices/security` <small>[(source)](./best-practices/security.js)</small>
These rules help enforce security best-practices such as [avoiding the `eval()` statement](https://eslint.org/docs/rules/no-eval) and requiring [`"use strict"` directives](https://eslint.org/docs/rules/strict).

### `modular/browser` <small>[(source)](./browser/index.js)</small>
This module configures ESLint to recognize browser globals, such as `window`, `document`, `navigator`, etc.  It also contains rules that are specific to projects that are intended to run in web browsers, such as [avoiding the `alert()` statement](https://eslint.org/docs/rules/no-alert) and [requiring the `use strict` directive within a function](http://www.ecma-international.org/ecma-262/6.0/#sec-directive-prologues-and-the-use-strict-directive).

### `modular/browser/jsx` <small>[(source)](./browser/jsx.js)</small>
This module configures ESLint to parse [JSX syntax](https://facebook.github.io/react/docs/jsx-in-depth.html). It also contains JSX-specific rules, such as enforcing the use of [double-quotes in JSX attributes](https://eslint.org/docs/rules/jsx-quotes).

### `modular/es5` <small>[(source)](./es5/index.js)</small>
This module configures ESLint to parse EcmaScript 5 code. It also disables ES6-specific rules, such as [using `let` instead of `var`](https://eslint.org/docs/rules/no-var).

### `modular/es6` <small>[(source)](./es6/index.js)</small>
This module configures ESLint to parse EcmaScript 6 (and newer) code. It also contains ES6-specific rules, such as [not assigning to constants](https://eslint.org/docs/rules/no-const-assign), [calling `super()` in constructors](https://eslint.org/docs/rules/no-this-before-super), and [using `let` instead of `var`](https://eslint.org/docs/rules/no-var).

### `modular/modules/cjs` <small>[(source)](./modules/cjs.js)</small>
This module configures ESLint to parse your JavaScript files with [script semantics](http://www.ecma-international.org/ecma-262/6.0/#sec-scripts-static-semantics-early-errors) rather than [ES6 module semantics](http://www.ecma-international.org/ecma-262/6.0/#sec-module-semantics), since CommonJS modules are not "true" JavaScript modules.

### `modular/modules/esm` <small>[(source)](./modules/esm.js)</small>
This module configures ESLint to parse your JavaScript files with [ES6 module semantics](http://www.ecma-international.org/ecma-262/6.0/#sec-module-semantics) rather than [script semantics](http://www.ecma-international.org/ecma-262/6.0/#sec-scripts-static-semantics-early-errors).  It also disallows [the `use strict` directive](http://www.ecma-international.org/ecma-262/6.0/#sec-directive-prologues-and-the-use-strict-directive), since ES6 modules are always strict.

### `modular/node` <small>[(source)](./node/index.js)</small>
This module configures ESLint to recognize Node.js globals, such as `process`, `__dirname`, `Buffer`, etc.  It also contains rules that are specific to Node.js projects, such as [avoding `new require()` syntax](https://eslint.org/docs/rules/no-new-require) and [disallowing concatenation with `__dirname`](https://eslint.org/docs/rules/no-path-concat).

### `modular/style` <small>[(source)](./style/index.js)</small>
This module contains code-styling and consistency rules.    You can use this module directly, or use any/all of its sub-modules.

#### `modular/style/conventions` <small>[(source)](./style/conventions.js)</small>
The rules in this module enforce an **opinionated** set of conventions, such as using [double-quotes](https://eslint.org/docs/rules/quotes) and [semi-colons](https://eslint.org/docs/rules/semi).

#### `modular/style/naming` <small>[(source)](./style/naming.js)</small>
These rules enforce JavaScript naming conventions, such as [camel-case variables](https://eslint.org/docs/rules/camelcase) and [capitialized classes](https://eslint.org/docs/rules/new-cap).

#### `modular/style/syntax` <small>[(source)](./style/syntax.js)</small>
These rules disallow outdated, nonstandard, and confusing syntax.  Examples include [labels](https://eslint.org/docs/rules/no-labels), [the comma operator](https://eslint.org/docs/rules/no-sequences), and [nonstandard multiline strings](https://eslint.org/docs/rules/no-multi-str).

#### `modular/style/whitespace` <small>[(source)](./style/whitespace.js)</small>
This module enforces **opinionated** whitespace rules, such as [two-space indentation](https://eslint.org/docs/rules/indent), [Stroustrup style opening braces](https://eslint.org/docs/rules/brace-style), and [commas at the end of the line](https://eslint.org/docs/rules/comma-style).

### `modular/test` <small>[(source)](./test/index.js)</small>
This module configures ESLint to recognize globals that are defined by common test frameworks, such as `describe`, `it`, `beforeEach`, etc.  It also disables rules that tend to cause problems with certain test frameworks.

> **Note:** We recommend that you create a separate `.eslintrc.yml` file in your test folder. That way, it can use different modules and rules than the rest of your codebase.


Big Thanks To
--------------------------
Thanks to these awesome companies for their support of Open Source developers ❤

[![Travis CI](https://jstools.dev/img/badges/travis-ci.svg)](https://travis-ci.com)
[![SauceLabs](https://jstools.dev/img/badges/sauce-labs.svg)](https://saucelabs.com)
[![Coveralls](https://jstools.dev/img/badges/coveralls.svg)](https://coveralls.io)
