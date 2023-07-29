"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var heading = function heading(type, text) {
  return "\n    <h" + type + " class=\"heading\">" + text + "</h" + type + ">\n  ";
};

exports.default = heading;