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

const stopListen = (node, event, callback) => {
  node.removeEventListener(event, callback);
} 
const stopListenAll = (nodes, event, callback) => {
  nodes.forEach((node) => {
    stopListen(node, event, callback);
  });
}

// events
const onLoad = (node, callback) => listen(node, 'load', callback);

const onLoadAll = (node, callback) => listenAll(node, 'load', callback);

const onClick = (node, callback) => listen(node, 'click', callback);

const onClickAll = (node, callback) => listenAll(node, 'click', callback);

const observer = (callback) => new IntersectionObserver( entries => {
  entries.forEach((entry) => {
    if (entry.isIntersecting === true) callback(entry);
  })
}, { threshold: [0]});

// Style
const checkStyle = (el, style) => window.getComputedStyle(el, style);

// Constants
const OPEN = "open";
const CLOSE = "close";

export { grab, grabAll, render, onLoad, onLoadAll, onClick, onClickAll, listen, listenAll, stopListen, stopListenAll, checkStyle, observer, OPEN, CLOSE };
