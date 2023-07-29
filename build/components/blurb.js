'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var blurb = function blurb(blurbArray, parent) {
  return parent ? blurbArray.reduce(function (acc, text) {
    return acc += '<p class="blurb">' + text + '</p>';
  }, '') : '<p class="blurb">' + blurbArray[0] + '</p>';
};

exports.default = blurb;