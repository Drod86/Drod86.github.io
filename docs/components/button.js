"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var button = function button(text, id) {
  return "<button id=\"" + id + "\" type=\"button\" class=\"btn\">" + text + "</button>";
};
exports.default = button;