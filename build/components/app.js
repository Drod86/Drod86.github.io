'use strict';

var _utils = require('./utils/utils');

var _modal = require('./components/modal');

var _modal2 = _interopRequireDefault(_modal);

var _card = require('./components/card');

var _card2 = _interopRequireDefault(_card);

var _fake_db = require('./utils/fake_db');

var _fake_db2 = _interopRequireDefault(_fake_db);

var _popups = require('./components/popups');

var _popups2 = _interopRequireDefault(_popups);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAV = (0, _utils.grab)('.nav');
var ITEMS = Object.values(NAV.children);
var MENU = ITEMS.pop().children[1];

var toggleMenu = function toggleMenu() {
  if (NAV.classList.length > 1) {
    (0, _utils.stopListenAll)(ITEMS, 'click', toggleMenu);
    NAV.classList.remove('open');
  } else {
    NAV.classList.add('open');
    (0, _utils.onClickAll)(ITEMS, toggleMenu);
  }
};

(0, _utils.onClick)(MENU, toggleMenu);

// Nav Item on scroll animation
var getNavLink = function getNavLink(id) {
  return ITEMS.filter(function (item) {
    return item.children[0].href.includes(id);
  });
};
var PORTFOLIO = (0, _utils.grab)('#portfolio');
var ABOUT = (0, _utils.grab)('#about');
var CONTACT = (0, _utils.grab)('#contact');
var sections = [PORTFOLIO, ABOUT, CONTACT];

sections.forEach(function (section) {
  (0, _utils.observer)(function (param, visible) {
    var link = getNavLink(param.target.id)[0];
    if (visible) {
      link.style.textDecoration = 'underline';
    } else {
      link.style.textDecoration = '';
    }
  }).observe(section);
});

// Dynamic rendering of projects
var projectEl = (0, _utils.grab)('.projects');
var projects = function projects(projectsObj) {
  return projectsObj.filter(function (project, i) {
    return i > 0;
  }).reduce(function (acc, project, i) {
    return acc + (0, _card2.default)(project, i + 1);
  }, '');
};
(0, _utils.render)(projectEl, projects(_fake_db2.default.projects));

// Mouse over project change background
var projectCards = Object.values((0, _utils.grabAll)('.card'));
projectCards.forEach(function (project) {
  var isDesktop = window.matchMedia('(min-width: 768px)');
  if (project.parentNode.className.includes('projects') && isDesktop.matches) {
    var previousBG = project.style.backgroundImage;
    (0, _utils.listen)(project, 'mouseover', function () {
      project.style.background = 'url(./images/project_bg_pro_w.jpg)';
    });
    (0, _utils.listen)(project, 'mouseout', function () {
      project.style.background = previousBG;
    });
  }
});

// Modal popup functionality
var CONTAINER = (0, _utils.grab)('.container');
var modalNode = (0, _utils.node)('div');
modalNode.className = 'modal grid';
var projectBtns = Object.values((0, _utils.grabAll)('.btn'));
// Seperate buttons that shouldn't trigger the modal from the projectBtns group
projectBtns.pop();
projectBtns.pop();
// Create modal toggle logic
var toggleModal = function toggleModal(e) {
  var isModal = (0, _utils.grab)('.modal');
  var id = e.target.id;

  if (!isModal) {
    CONTAINER.appendChild(modalNode);
    var modalEl = (0, _utils.grab)('.modal');
    (0, _utils.render)(modalEl, (0, _modal2.default)(_fake_db2.default.projects, id));
    modalEl.addEventListener('click', toggleModal);
  } else if (e.target.className.includes('modal')) {
    CONTAINER.removeChild(modalNode);
  }
};
// Add the click event listener to the projectBtns that will toggle the modal
(0, _utils.onClickAll)(projectBtns, toggleModal);

// Form Functionality: persist state and validate email entry

// Persist Form State:
var contactForm = (0, _utils.grab)('.form');

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
var handleInvalidEmail = function handleInvalidEmail(form, email) {
  var emailField = (0, _utils.grab)('.email');
  var className = 'invalidEmail';
  var popupText = 'Your email must be in all lowercase. We changed it for you? If it looks good, submit the form again. Thank you!';
  (0, _popups2.default)(form, className, popupText);
  emailField.value = email.toLowerCase();
};

var validateContact = function validateContact(e) {
  e.preventDefault();
  var email = (0, _utils.grab)('.email').value;
  var isLowercase = email === email.toLowerCase();
  if (isLowercase) {
    contactForm.submit();
    contactForm.reset();
  } else {
    handleInvalidEmail(contactForm, email);
  }
};

(0, _utils.onSubmit)(contactForm, validateContact);