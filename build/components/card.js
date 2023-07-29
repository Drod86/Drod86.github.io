'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _badges = require('./badges.mjs');

var _heading = require('./heading.mjs');

var _heading2 = _interopRequireDefault(_heading);

var _blurb = require('./blurb.mjs');

var _blurb2 = _interopRequireDefault(_blurb);

var _button = require('./button.mjs');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var card = function card(projectObj, id) {
  var bdgs = projectObj.bdgs,
      imgUrl = projectObj.imgUrl,
      headingText = projectObj.headingText,
      blurbs = projectObj.blurbs;

  return '\n    <article class="card" style="background-image: url(' + imgUrl + ');">\n      ' + (0, _heading2.default)(3, headingText) + '\n      ' + (0, _blurb2.default)(blurbs) + '\n      ' + (0, _badges.badges)(bdgs) + '\n      ' + (0, _button2.default)('See project', id) + '\n    </article>\n  ';
};

exports.default = card;