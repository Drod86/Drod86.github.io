'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var badge = function badge(text, classList) {
  var classes = classList.length > 0 ? classList.reduce(function (acc, cl) {
    return acc += cl;
  }, '') : '';

  return '<li class="badge ' + classes + '">' + text + '</li>';
};

var badges = function badges(badgesDataArray) {
  return '<ul class="badges">\n            ' + badgesDataArray.reduce(function (acc, badgeDataObj) {
    var text = badgeDataObj.text,
        classList = badgeDataObj.classList;

    return acc += badge(text, classList);
  }, '') + '\n          </ul>';
};

exports.badge = badge;
exports.badges = badges;