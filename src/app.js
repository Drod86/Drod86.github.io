import {grab, onClick, onClickAll, stopListenAll} from './utils/utils.mjs';

const NAV = grab('nav');
const ITEMS = Object.values(NAV.children);
const MENU = ITEMS.pop().children[1];

const toggleMenu = () => { 
  if (NAV.classList.length > 1){
    stopListenAll(ITEMS, 'click', toggleMenu);
    NAV.classList.remove('open');
  } else {
    NAV.classList.add('open')
    onClickAll(ITEMS, toggleMenu);
  };
};

onClick(MENU, toggleMenu);