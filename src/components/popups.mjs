import {node, grab, render, onClick} from '../utils/utils.mjs';

const fadingPopup = (parentNode,className, text) => {
  let popup = node('div');
  popup.className = `${className} fadeOut`;
  parentNode.appendChild(popup);
  let errorMsgEl = grab(`.${className}`);
  render(errorMsgEl, text);
  onClick(grab('.container'), (e) => {
    let isVisible = parentNode.lastChild.className;
    if (isVisible && errorMsgEl && e.target.className !== errorMsgEl.className) parentNode.removeChild(errorMsgEl);
  });
}

export default fadingPopup;