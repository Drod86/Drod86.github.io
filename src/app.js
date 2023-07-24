import {grab, onClick, onClickAll} from './utils/utils.mjs';

const NAV = grab('nav');
const ITEMS = Object.values(NAV.children);
const MENU = ITEMS.pop();

const toggleMenu = () => { 
  if (NAV.classList.length > 1){
    ITEMS.forEach(item => item.removeEventListener('click', toggleMenu))
    NAV.classList.remove('open');
  } else {
    NAV.classList.add('open')
    onClickAll(ITEMS, toggleMenu);
  };
};

onClick(MENU, toggleMenu);