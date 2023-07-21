// DOM
const grab = (selector) => document.querySelector(selector);

const grabAll = (selector) => Object.values(document.querySelectorAll(selector));

const render = (node, markup) => (node.innerHTML = markup);

// listen
const listen = (node, event, callback, params) => {
  node.addEventListener(event, (e) => {
    callback(...params, e);
  })
} 
const listenAll = (nodes, event, callback, params) => {
  nodes.forEach((node) => {
    listen(node, event, callback, params);
  });
}

// events
const onLoad = (node, callback, params) => listen(node, 'load', callback, params);

const onLoadAll = (node, callback, params) => listenAll(node, 'load', callback, params);

const onClick = (node, callback, params) => listen(node, 'click', callback, params);

const onClickAll = (node, callback, params) => listenAll(node, 'click', callback, params);

// Style
const checkStyle = (el, style) => window.getComputedStyle(el, style);

// Constants
const OPEN = "open";
const CLOSE = "close";

export { grab, grabAll, render, onLoad, onLoadAll, onClick, onClickAll, listen, listenAll, checkStyle, OPEN, CLOSE };
