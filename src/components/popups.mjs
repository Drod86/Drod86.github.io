import {node, grab, render, onClick, stopListen} from '../utils/utils.mjs';
const container = grab('.container');
const listeners = []

const closePopup = (parentNode, e) => {
  let popup = parentNode.lastChild;
  if (e.target !== popup) {
    parentNode.removeChild(popup);
    stopListen(container, 'click', listeners[0]);
  }
}

const fadingPopup = (parentNode,className, text) => {
  let popup = node('div');
  popup.className = `${className}`;
  parentNode.appendChild(popup);
  let errorMsgEl = grab(`.${className}`);
  render(errorMsgEl, text);

  setTimeout(() => {
    errorMsgEl.classList.add('fadeOut');
  }, 4000);

  listeners.push(closePopup.bind(this, parentNode));
  onClick(container, listeners[0]);
}

export default fadingPopup;