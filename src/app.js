import {
  grab, onClick, onClickAll, stopListenAll, listen, observer
} from './utils/utils.mjs';

const NAV = grab('.nav');
const ITEMS = Object.values(NAV.children);
const MENU = ITEMS.pop().children[1];

const toggleMenu = () => {
  if (NAV.classList.length > 1) {
    stopListenAll(ITEMS, 'click', toggleMenu);
    NAV.classList.remove('open');
  } else {
    NAV.classList.add('open');
    onClickAll(ITEMS, toggleMenu);
  }
};

onClick(MENU, toggleMenu);

const getNavLink = (id) => ITEMS.filter(item => item.children[0].href.includes(id))
const PORTFOLIO = grab('#portfolio');
// console.log(sectionLinks);
// const onScroll = (sections) => {
//   array.forEach(element => {
    
//   });
// }

observer((param) => console.log(getNavLink(param.target.id)[0])
).observe(PORTFOLIO);
