"use strict";

const bugs = require("./bugs");
const security = require("./security");

module.exports = {
  extends: [
    "modular/best-practices/bugs",
    "modular/best-practices/security",
  ],
};
