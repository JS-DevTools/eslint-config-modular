'use strict';

module.exports = {
  rules: {
    // disallow space inside array square brackets
    'array-bracket-spacing': 'error',

    // require space before/after arrow function's arrow
    'arrow-spacing': 'error',

    // require spaces inside of single-line blocks
    'block-spacing': 'error',

    // enforce one true brace style
    'brace-style': [
      'error',
      'stroustrup',
      {
        // allow opening and closing brace to be on the same line
        allowSingleLine: true,
      },
    ],

    // require camel case names
    camelcase: 'error',

    // enforce spacing after comma (but not before)
    'comma-spacing': [
      'warn',
      {
        before: false,
        after: true,
      },
    ],

    // require commas to be placed at the ends of lines
    'comma-style': 'error',

    // disallow space inside computed property square brackets
    'computed-property-spacing': 'error',

    // specify curly brace conventions for all control statements
    curly: 'error',

    // specify the placement of dots in multi-line statements
    'dot-location': [
      'error',
      'property',
    ],

    // encourages use of dot notation whenever possible
    'dot-notation': 'error',

    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 'error',

    // disallow spaces after the function name in function calls
    'func-call-spacing': 'error',

    // enforce use of function declarations
    'func-style': [
      'error',
      'declaration',
    ],

    // specify 2-space indentation
    indent: [
      'error',
      2,                        // 2 spaces
      {
        SwitchCase: 1,          // indent multipler for "switch" "case" statements
        VariableDeclarator: {
          var: 2,               // indent multiplier for multi-line "var" statements
          let: 2,               // indent multiplier for multi-line "let" statements
          const: 3,             // indent multiplier for multi-line "const" statements
        },
      },
    ],

    // enforces spacing between keys and values in object literal properties
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],

    // require a space before and after keywords
    'keyword-spacing': 'error',

    // require unix line endings (LF)
    'linebreak-style': [
      'error',
      'unix',
    ],

    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 'error',

    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',

    // disallow use of multiple spaces
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,    // allow multiple spaces before end-of-line comments (like this one!)
      }
    ],

    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',

    // disallow use of undefined when initializing variables
    'no-undef-init': 'error',

    // disallow multi-line statements that could be confused for separte ASI statements
    'no-unexpected-multiline': 'error',

    // disallow the use of ternary operators when a simpler alternative exists
    'no-unneeded-ternary': 'error',

    // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 'warn',

    // disallow usage of expressions in statement position
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,   // allow short-circuited expressions (e.g. foo && bar())
        allowTernary: true,        // allow ternary expressions (e.g. foo ? bar() : baz())
      },
    ],

    // disallow unnecessary .call() and .apply()
    'no-useless-call': 'error',

    // disallow unnecessary concatenation of string literals
    'no-useless-concat': 'error',

    // require a space around curly braces in object literals
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: false,
        objectsInObjects: false
      }
    ],

    // require linebreaks to be placed after operators
    'operator-linebreak': 'error',

    // disallow quotes around object literal property names
    'quote-props': [
      'warn',
      'as-needed',
    ],

    // require single quotes for all strings
    quotes: [
      'error',
      'single',
      'avoid-escape',
    ],

    // require use of semicolons instead of ASI
    semi: 'error',

    // enforce spacing after semicolons
    'semi-spacing': 'error',

    // disallow space before blocks
    'space-before-blocks': 'error',

    // require a space between the function name and left paren in function definitions
    'space-before-function-paren': 'error',

    // disallow spaces inside parentheses
    'space-in-parens': 'error',

    // require spaces around operators
    'space-infix-ops': 'error',

    // disallow spaces before/after unary operators
    'space-unary-ops': 'error',

    // require a space at the start of a comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['/'],                       // exceptions for line comments
        },
        block: {
          exceptions: ['*', '!', '-', '=', '+'],   // exceptions for block comments
        },
      },
    ],
  }
};
