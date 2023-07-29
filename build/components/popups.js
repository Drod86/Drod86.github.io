'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils.mjs');

var container = (0, _utils.grab)('.container');
var listeners = [];

var closePopup = function closePopup(parentNode, e) {
  var popup = parentNode.lastChild;
  if (e.target !== popup) {
    parentNode.removeChild(popup);
    (0, _utils.stopListen)(container, 'click', listeners[0]);
  }
};

var fadingPopup = function fadingPopup(parentNode, className, text) {
  var popup = (0, _utils.node)('div');
  popup.className = '' + className;
  parentNode.appendChild(popup);
  var errorMsgEl = (0, _utils.grab)('.' + className);
  (0, _utils.render)(errorMsgEl, text);

  setTimeout(function () {
    errorMsgEl.classList.add('fadeOut');
  }, 4000);

  listeners.push(closePopup.bind(undefined, parentNode));
  (0, _utils.onClick)(container, listeners[0]);
};

exports.default = fadingPopup;