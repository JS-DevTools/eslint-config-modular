"use strict";

const conventions = require("./conventions");
const naming = require("./naming");
const syntax = require("./syntax");
const whitespace = require("./whitespace");

module.exports = {
  extends: [
    "modular/style/conventions",
    "modular/style/naming",
    "modular/style/syntax",
    "modular/style/whitespace",
  ],
};
