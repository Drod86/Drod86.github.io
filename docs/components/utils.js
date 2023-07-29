'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// DOM
var node = function node(type) {
  return document.createElement(type);
};

var grab = function grab(selector) {
  return document.querySelector(selector);
};

var grabAll = function grabAll(selector) {
  return Object.values(document.querySelectorAll(selector));
};

var render = function render(node, markup) {
  return node.innerHTML = markup;
};

// listen
var listen = function listen(node, event, callback) {
  node.addEventListener(event, callback);
};

var listenAll = function listenAll(nodes, event, callback) {
  nodes.forEach(function (node) {
    listen(node, event, callback);
  });
};

var stopListen = function stopListen(node, event, callback) {
  node.removeEventListener(event, callback);
};
var stopListenAll = function stopListenAll(nodes, event, callback) {
  nodes.forEach(function (node) {
    stopListen(node, event, callback);
  });
};

// events
var onLoad = function onLoad(node, callback) {
  return listen(node, 'load', callback);
};

var onLoadAll = function onLoadAll(node, callback) {
  return listenAll(node, 'load', callback);
};

var onUnload = function onUnload(node, callback) {
  return listen(node, 'unload', callback);
};

var onClick = function onClick(node, callback) {
  return listen(node, 'click', callback);
};

var onClickAll = function onClickAll(node, callback) {
  return listenAll(node, 'click', callback);
};

var onSubmit = function onSubmit(node, callback) {
  return listen(node, 'submit', callback);
};

var observer = function observer(callback) {
  return new IntersectionObserver(function (entries) {
    var visible = entries[0].isIntersecting;
    callback(entries[0], visible);
  }, { threshold: [0] });
};

// Style
var checkStyle = function checkStyle(el, style) {
  return window.getComputedStyle(el, style);
};

// Constants
var OPEN = "open";
var CLOSE = "close";

exports.grab = grab;
exports.grabAll = grabAll;
exports.render = render;
exports.onLoad = onLoad;
exports.onLoadAll = onLoadAll;
exports.onUnload = onUnload;
exports.onClick = onClick;
exports.onClickAll = onClickAll;
exports.onSubmit = onSubmit;
exports.listen = listen;
exports.listenAll = listenAll;
exports.stopListen = stopListen;
exports.stopListenAll = stopListenAll;
exports.checkStyle = checkStyle;
exports.node = node;
exports.observer = observer;
exports.OPEN = OPEN;
exports.CLOSE = CLOSE;