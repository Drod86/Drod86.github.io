"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require("../utils/utils.mjs");

var _badges = require("./badges.mjs");

var _heading = require("./heading.mjs");

var _heading2 = _interopRequireDefault(_heading);

var _blurb = require("./blurb.mjs");

var _blurb2 = _interopRequireDefault(_blurb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = function modal(obj, id) {
  var _obj$id = obj[id],
      headingText = _obj$id.headingText,
      bdgs = _obj$id.bdgs,
      modalImgUrl = _obj$id.modalImgUrl,
      imgAlt = _obj$id.imgAlt,
      blurbs = _obj$id.blurbs,
      liveUrl = _obj$id.liveUrl,
      githubUrl = _obj$id.githubUrl;


  var markup = "\n    <section class=\"recent-works grid-item\">\n      " + (0, _heading2.default)(2, headingText) + "\n      " + (0, _badges.badges)(bdgs) + "\n      <section class=\"feature\">\n        <img\n          class=\"img\"\n          src=\"" + modalImgUrl + "\"\n          alt=\"" + imgAlt + "\"\n        />\n        <article class=\"card\">\n          " + (0, _blurb2.default)(blurbs, 'modal') + "\n          <div class=\"btns\">\n            <a href=\"" + liveUrl + "\" target=\"_blank\">\n              <button type=\"button\" class=\"btn\">\n                See live\n                <svg class=\"icon\">\n                  <use xlink:href=\"./images/sprite.svg#see_live\"></use>\n                </svg>\n              </button>\n            </a>\n            <a href=\"" + githubUrl + "\" target=\"_blank\">\n              <button type=\"button\" class=\"btn\">\n                See source\n                <svg class=\"icon\">\n                  <use xlink:href=\"./images/sprite.svg#github\"></use>\n                </svg>\n              </button>\n            </a>\n          </div>\n        </div>\n      </article>\n    </section>\n  ";
  return markup;
};

exports.default = modal;