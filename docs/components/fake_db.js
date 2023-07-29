'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var projectData = function projectData(headingText, bdgs, imgUrl, imgAlt, blurbs) {
  var liveUrl = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
  var githubUrl = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';
  var modalImgUrl = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '../images/modal.jpg';

  return {
    'headingText': headingText,
    'bdgs': bdgs,
    'imgUrl': imgUrl,
    'imgAlt': imgAlt,
    'blurbs': blurbs,
    'liveUrl': liveUrl,
    'githubUrl': githubUrl,
    'modalImgUrl': modalImgUrl
  };
};

var db = {
  'socials': ['github', 'linkedin', 'angellist', 'twitter', 'medium'],
  'projects': [projectData('Multi-Post Stories', [{ text: 'CSS', classList: [''] }, { text: 'HTML', classList: [''] }, { text: 'Bootstrap', classList: [''] }, { text: 'Ruby', classList: [''] }], './images/feature_project.png', 'Gym Fit', ['A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'], 'https://drod86.github.io/', 'https://github.com/Drod86/Drod86.github.io', './images/feature_project.png'), projectData('Profesional Art Printing Data More', [{ text: 'HTML', classList: [''] }, { text: 'Bootstrap', classList: [''] }, { text: 'Ruby', classList: [''] }], './images/project_bg_pro.jpg', 'Profesional Art Printing Data More Website Screenshot', ['A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.', 'A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'], 'https://drod86.github.io/', 'https://github.com/Drod86/Drod86.github.io', './images/project_bg_pro.jpg'), projectData('Data Dashboard Healthcare', [{ text: 'HTML', classList: [''] }, { text: 'Bootstrap', classList: [''] }, { text: 'Ruby', classList: [''] }], './images/project_bg_data.jpg', 'Data Dashboard Healthcare Website Screenshot', ['A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'], 'https://drod86.github.io/', 'https://github.com/Drod86/Drod86.github.io', './images/project_bg_data.jpg'), projectData('Website Portfolio', [{ text: 'HTML', classList: [''] }, { text: 'Bootstrap', classList: [''] }, { text: 'Ruby', classList: [''] }], './images/project_bg_web.jpg', 'Website Portfolio Screenshot', ['A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.', 'A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'], 'https://drod86.github.io/', 'https://github.com/Drod86/Drod86.github.io', './images/project_bg_web.jpg'), projectData('Profesional Art Printing Data More', [{ text: 'HTML', classList: [''] }, { text: 'Bootstrap', classList: [''] }, { text: 'Ruby', classList: [''] }], './images/project_bg_pro.jpg', 'Profesional Art Printing Data More Website Screenshot', ['A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'], 'https://drod86.github.io/', 'https://github.com/Drod86/Drod86.github.io', './images/project_bg_pro.jpg'), projectData('Data Dashboard Healthcare', [{ text: 'HTML', classList: [''] }, { text: 'Bootstrap', classList: [''] }, { text: 'Ruby', classList: [''] }], './images/project_bg_data.jpg', 'Data Dashboard Healthcare Website Screenshot', ['A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.', 'A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'], 'https://drod86.github.io/', 'https://github.com/Drod86/Drod86.github.io', './images/project_bg_data.jpg'), projectData('Website Portfolio', [{ text: 'HTML', classList: [''] }, { text: 'Bootstrap', classList: [''] }, { text: 'Ruby', classList: [''] }], './images/project_bg_web.jpg', 'Website Portfolio Screenshot', ['A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'], 'https://drod86.github.io/', 'https://github.com/Drod86/Drod86.github.io', './images/project_bg_web.jpg')]
};

exports.default = db;