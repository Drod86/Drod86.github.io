const projectData = (headingText, bdgs, imgUrl, imgAlt, blurbs, liveUrl='', githubUrl='', modalImgUrl='../images/modal.jpg') => {
  return {
    'headingText': headingText,
    'bdgs': bdgs,
    'imgUrl': imgUrl,
    'imgAlt': imgAlt,
    'blurbs': blurbs,
    'liveUrl': liveUrl,
    'githubUrl': githubUrl,
    'modalImgUrl': modalImgUrl,
  }
}

const db = {
  'socials': ['github', 'linkedin', 'angellist', 'twitter', 'medium'],
  'projects': [
    projectData(
      'Multi-Post Stories',
      [{text: 'CSS', classList: ['']}, {text: 'HTML', classList: ['']}, {text: 'Bootstrap', classList: ['']}, {text: 'Ruby', classList: ['']}], 
      '', 
      'Gym Fit', 
      [`A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`], 
      '', 
      '', 
      './images/feature_project.png'
    ),
    projectData(
      'Profesional Art Printing Data More',
      [{text: 'HTML', classList: ['']}, {text: 'Bootstrap', classList: ['']}, {text: 'Ruby', classList: ['']}], 
      './images/project_bg_pro.jpg', 
      null, 
      [`A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`, `A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`], 
      null, 
      null, 
      '../images/modal.jpg'
    ),
    projectData(
      'Data Dashboard Healthcare',
      [{text: 'HTML', classList: ['']}, {text: 'Bootstrap', classList: ['']}, {text: 'Ruby', classList: ['']}], 
      './images/project_bg_data.jpg', 
      null, 
      [`A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`], 
      null, 
      null, 
      '../images/modal.jpg'
    ),
    projectData(
      'Website Portfolio',
      [{text: 'HTML', classList: ['']}, {text: 'Bootstrap', classList: ['']}, {text: 'Ruby', classList: ['']}], 
      './images/project_bg_web.jpg', 
      null, 
      [`A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`, `A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`], 
      null, 
      null, 
      '../images/modal.jpg'
    ),
    projectData(
      'Profesional Art Printing Data More',
      [{text: 'HTML', classList: ['']}, {text: 'Bootstrap', classList: ['']}, {text: 'Ruby', classList: ['']}], 
      './images/project_bg_pro.jpg', 
      null, 
      [`A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`], 
      null, 
      null, 
      '../images/modal.jpg'
    ),
    projectData(
      'Data Dashboard Healthcare',
      [{text: 'HTML', classList: ['']}, {text: 'Bootstrap', classList: ['']}, {text: 'Ruby', classList: ['']}], 
      './images/project_bg_data.jpg', 
      null, 
      [`A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`, `A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`], 
      null, 
      null, 
      '../images/modal.jpg'
    ),
    projectData(
      'Website Portfolio',
      [{text: 'HTML', classList: ['']}, {text: 'Bootstrap', classList: ['']}, {text: 'Ruby', classList: ['']}], 
      './images/project_bg_web.jpg', 
      null, 
      [`A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`], 
      null, 
      null, 
      '../images/modal.jpg'
    ),
  ]
}

export default db;