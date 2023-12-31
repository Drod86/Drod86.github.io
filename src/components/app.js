import {
  grab, onClick, onClickAll, onSubmit, onLoad,
  stopListenAll, observer, node, render, grabAll,
  listen, onUnload,
} from './utils/utils';
import modal from './components/modal';
import card from './components/card';
import db from './utils/fake_db';
import fadingPopup from './components/popups';

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

// Nav Item on scroll animation
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
const projects = (projectsObj) => projectsObj.filter((project, i) => i > 0).reduce((acc, project, i) => acc + card(project, i + 1), '');
render(projectEl, projects(db.projects));

// Mouse over project change background
const projectCards = Object.values(grabAll('.card'));
projectCards.forEach((project) => {
  const isDesktop = window.matchMedia('(min-width: 768px)');
  if (project.parentNode.className.includes('projects') && isDesktop.matches) {
    const previousBG = project.style.backgroundImage;
    listen(project, 'mouseover', () => {
      project.style.background = 'url(./images/project_bg_pro_w.jpg)';
    });
    listen(project, 'mouseout', () => {
      project.style.background = previousBG;
    });
  }
});

// Modal popup functionality
const CONTAINER = grab('.container');
const modalNode = node('div');
modalNode.className = 'modal grid';
const projectBtns = Object.values(grabAll('.btn'));
// Seperate buttons that shouldn't trigger the modal from the projectBtns group
projectBtns.pop();
projectBtns.pop();
// Create modal toggle logic
const toggleModal = (e) => {
  const isModal = grab('.modal');
  const { id } = e.target;
  if (!isModal) {
    CONTAINER.appendChild(modalNode);
    const modalEl = grab('.modal');
    render(modalEl, modal(db.projects, id));
    modalEl.addEventListener('click', toggleModal);
  } else if (e.target.className.includes('modal')) {
    CONTAINER.removeChild(modalNode);
  }
};
// Add the click event listener to the projectBtns that will toggle the modal
onClickAll(projectBtns, toggleModal);

// Form Functionality: persist state and validate email entry

// Persist Form State:
const contactForm = grab('.form');

// const captureFormState = (form) => Object.values(form.children).filter((child) => Object.values(child.attributes).filter((att) => att.name === 'required').length > 0).reduce((acc, input) => ({ ...acc, [input.name]: input.value }), {});

// const persistFormState = (form) => {
//   const formName = form.classList[0];
//   const formState = JSON.stringify(captureFormState(form));
//   localStorage.setItem(formName, formState);
// };

// const loadFormState = (form) => {
//   const formName = form.classList[0];
//   const formInputs = Object.values(form.children).filter((child) => Object.values(child.attributes).filter((att) => att.name === 'required').length > 0);
//   const stateExists = localStorage.getItem(formName);
//   if (stateExists === null) {
//     persistFormState(form);
//   }
//   const state = JSON.parse(localStorage.getItem(formName));
//   formInputs.forEach((input) => { input.value = state[input.name]; });
// };

// onLoad(window, loadFormState.bind(this, contactForm));
// onUnload(window, persistFormState.bind(this, contactForm));

// Form validation functionality "lowercase email address"
const handleInvalidEmail = (form, email) => {
  const emailField = grab('.email');
  const className = 'invalidEmail';
  const popupText = 'Your email must be in all lowercase. We changed it for you? If it looks good, submit the form again. Thank you!';
  fadingPopup(form, className, popupText);
  emailField.value = email.toLowerCase();
};

const validateContact = (e) => {
  e.preventDefault();
  const email = grab('.email').value;
  const isLowercase = email === email.toLowerCase();
  if (isLowercase) {
    contactForm.submit();
    contactForm.reset();
  } else {
    handleInvalidEmail(contactForm, email);
  }
};

onSubmit(contactForm, validateContact);
