// DOM
const grab = (selector) => document.querySelector(selector);

const grabAll = (selector) => Object.values(document.querySelectorAll(selector));

const render = (node, markup) => (node.innerHTML = markup);

// listen
const listen = (node, event, callback) => {
  node.addEventListener(event, callback)
} 
const listenAll = (nodes, event, callback) => {
  nodes.forEach((node) => {
    listen(node, event, callback);
  });
}

const stopListen = (node, event) => {
  node.removeEventListener(event)
} 
const stopListenAll = (nodes, event) => {
  nodes.forEach((node) => {
    stopListen(node, event);
  });
}

// events
const onLoad = (node, callback) => listen(node, 'load', callback);

const onLoadAll = (node, callback) => listenAll(node, 'load', callback);

const onClick = (node, callback) => listen(node, 'click', callback);

const onClickAll = (node, callback) => listenAll(node, 'click', callback);

// Style
const checkStyle = (el, style) => window.getComputedStyle(el, style);

// Constants
const OPEN = "open";
const CLOSE = "close";

export { grab, grabAll, render, onLoad, onLoadAll, onClick, onClickAll, listen, listenAll, stopListen, stopListenAll, checkStyle, OPEN, CLOSE };
