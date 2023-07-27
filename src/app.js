import {
  grab, onClick, onClickAll, stopListenAll, observer, node, render, grabAll, listen
} from './utils/utils.mjs';
import {modal} from './components/modal.mjs';
import card from './components/card.mjs';
import db from './utils/fake_db.mjs';

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

const getNavLink = (id) => ITEMS.filter((item) => item.children[0].href.includes(id));
const PORTFOLIO = grab('#portfolio');
const ABOUT = grab('#about');
const CONTACT = grab('#contact');
const sections = [PORTFOLIO, ABOUT, CONTACT];

sections.forEach((section) => {
  observer((param, visible) => {
    const link = getNavLink(param.target.id)[0];
    if (visible) {
      link.style.textDecoration = 'underline';
    } else {
      link.style.textDecoration = '';
    }
  }).observe(section);
});

// Dynamic rendering of projects
const projectEl = grab('.projects');
const projects = (projectsObj) => projectsObj.filter((project, i) => i > 0).reduce((acc, project, i) => acc += card(project, ++i), ``);
render(projectEl, projects(db.projects));

//Mouse over project change background
const projectCards = Object.values(grabAll('.card'));
projectCards.forEach(project => {
  let isMobile = window.matchMedia("(min-width: 768px)");
  console.log(isMobile.matches);
  if (project.parentNode.className.includes('projects') && isMobile.matches) {
    let previousBG = project.style.backgroundImage;
    listen(project, 'mouseover', (e) => {
      project.style.background = 'url(./images/project_bg_pro_w.jpg)';
    })
    listen(project, 'mouseout', (e) => {
      project.style.background = previousBG;
    })
  };
})
