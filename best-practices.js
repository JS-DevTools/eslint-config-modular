'use strict';

module.exports = {
  rules: {
    // require corresponding getters for any setters
    'accessor-pairs': 'error',

    // treat var statements as if they were block scoped
    'block-scoped-var': 'error',

    // verify calls of super() in constructors
    'constructor-super': 'error',

    // require the use of === and !==
    eqeqeq: 'error',

    // make sure for-in loops have an if statement
    'guard-for-in': 'error',

    // require a capital letter for constructors
    'new-cap': 'error',

    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 'error',

    // disallow use of the Array constructor
    'no-array-constructor': 'error',

    // disallow use of bitwise operators
    'no-bitwise': 'error',

    // disallow use of arguments.caller or arguments.callee
    'no-caller': 'error',

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': 'warn',

    // disallow assignment in conditional expressions
    'no-cond-assign': 'error',

    // disallow control characters in regular expressions
    'no-control-regex': 'error',

    // disallow use of debugger
    'no-debugger': 'error',

    // disallow deletion of variables
    'no-delete-var': 'error',

    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 'error',

    // disallow duplicate argument names in functions
    'no-dupe-args': 'error',

    // disallow duplicate keys when creating object literals
    'no-dupe-keys': 'error',

    // disallow duplicate case labels
    'no-duplicate-case': 'error',

    // disallow empty statements
    'no-empty': 'error',

    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 'error',

    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 'error',

    // disallow use of eval()
    'no-eval': 'error',

    // disallow adding to native types
    'no-extend-native': 'error',

    // disallow unnecessary function binding
    'no-extra-bind': 'error',

    // disallow double-negation boolean casts in a boolean context
    'no-extra-boolean-cast': 'error',

    // disallow unnecessary semicolons
    'no-extra-semi': 'error',

    // disallow fallthrough of case statements
    'no-fallthrough': 'error',

    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'error',

    // disallow overwriting functions written as function declarations
    'no-func-assign': 'error',

    // disallow use of eval()-like methods
    'no-implied-eval': 'error',

    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': 'error',

    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 'error',

    // disallow usage of __iterator__ property
    'no-iterator': 'error',

    // disallow labels that share a name with a variable
    'no-label-var': 'error',

    // disallow use of labeled statements
    'no-labels': 'error',

    // disallow unnecessary nested blocks
    'no-lone-blocks': 'warn',

    // disallow creation of functions within loops
    'no-loop-func': 'warn',

    // disallow use of multiline strings
    'no-multi-str': 'error',

    // disallow reassignments of native objects
    'no-native-reassign': 'error',

    // disallow negation of the left operand of an in expression
    'no-negated-in-lhs': 'error',

    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 'error',

    // disallow use of new operator for Function object
    'no-new-func': 'error',

    // disallow use of the Object constructor
    'no-new-object': 'error',

    // disallows creating new instances of String, Number, and Boolean
    'no-new-wrappers': 'error',

    // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': 'error',

    // disallow use of octal literals
    'no-octal': 'error',

    // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \050";
    'no-octal-escape': 'error',

    // disallow usage of __proto__ property
    'no-proto': 'error',

    // disallow declaring the same variable more then once
    'no-redeclare': 'error',

    // disallow use of javascript: urls.
    'no-script-url': 'error',

    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',

    // disallow use of comma operator
    'no-sequences': 'error',

    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 'warn',

    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 'error',

    // disallow sparse arrays
    'no-sparse-arrays': 'error',

    // disallow throwing non-Error objects
    'no-throw-literal': 'error',

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 'error',

    // disallow declaration of variables that are not used in the code
    'no-unused-vars': [
      'error',
      {
        vars: 'all',                // check "all" variables (as opposed to just "local" variables)
        args: 'after-used',         // check any arguments that come "after-used" arguments
      },
    ],

    // disallow use of void operator
    'no-void': 'error',

    // disallow use of the with statement
    'no-with': 'error',

    // require assignment operator shorthand where possible
    'operator-assignment': 'error',

    // Require the "use strict" pragma, either at the global level or function level,
    // depending on whether CommonJS is being used or not
    strict: [
      'error',
      'safe',
    ],

    // disallow comparisons with the value NaN
    'use-isnan': 'error',

    // Ensure that the results of typeof are compared against a valid string
    'valid-typeof': 'error',

    // require immediate function invocation to be wrapped in parentheses
    'wrap-iife': 'error',

    // disallow Yoda conditions
    yoda: 'error',

  }
};
