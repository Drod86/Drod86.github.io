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
      './images/feature_project.png', 
      'Gym Fit', 
      [`A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`], 
      'https://drod86.github.io/', 
      'https://github.com/Drod86/Drod86.github.io', 
      './images/feature_project.png'
    ),
    projectData(
      'Profesional Art Printing Data More',
      [{text: 'HTML', classList: ['']}, {text: 'Bootstrap', classList: ['']}, {text: 'Ruby', classList: ['']}], 
      './images/project_bg_pro.jpg', 
      'Profesional Art Printing Data More Website Screenshot', 
      [`A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`, `A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`], 
      'https://drod86.github.io/', 
      'https://github.com/Drod86/Drod86.github.io', 
      './images/project_bg_pro.jpg'
    ),
    projectData(
      'Data Dashboard Healthcare',
      [{text: 'HTML', classList: ['']}, {text: 'Bootstrap', classList: ['']}, {text: 'Ruby', classList: ['']}], 
      './images/project_bg_data.jpg', 
      'Data Dashboard Healthcare Website Screenshot', 
      [`A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`], 
      'https://drod86.github.io/', 
      'https://github.com/Drod86/Drod86.github.io', 
      './images/project_bg_data.jpg'
    ),
    projectData(
      'Website Portfolio',
      [{text: 'HTML', classList: ['']}, {text: 'Bootstrap', classList: ['']}, {text: 'Ruby', classList: ['']}], 
      './images/project_bg_web.jpg', 
      'Website Portfolio Screenshot', 
      [`A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`, `A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`], 
      'https://drod86.github.io/', 
      'https://github.com/Drod86/Drod86.github.io', 
      './images/project_bg_web.jpg'
    ),
    projectData(
      'Profesional Art Printing Data More',
      [{text: 'HTML', classList: ['']}, {text: 'Bootstrap', classList: ['']}, {text: 'Ruby', classList: ['']}], 
      './images/project_bg_pro.jpg', 
      'Profesional Art Printing Data More Website Screenshot', 
      [`A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`], 
      'https://drod86.github.io/', 
      'https://github.com/Drod86/Drod86.github.io', 
      './images/project_bg_pro.jpg'
    ),
    projectData(
      'Data Dashboard Healthcare',
      [{text: 'HTML', classList: ['']}, {text: 'Bootstrap', classList: ['']}, {text: 'Ruby', classList: ['']}], 
      './images/project_bg_data.jpg', 
      'Data Dashboard Healthcare Website Screenshot', 
      [`A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`, `A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`], 
      'https://drod86.github.io/', 
      'https://github.com/Drod86/Drod86.github.io', 
      './images/project_bg_data.jpg'
    ),
    projectData(
      'Website Portfolio',
      [{text: 'HTML', classList: ['']}, {text: 'Bootstrap', classList: ['']}, {text: 'Ruby', classList: ['']}], 
      './images/project_bg_web.jpg', 
      'Website Portfolio Screenshot', 
      [`A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`], 
      'https://drod86.github.io/', 
      'https://github.com/Drod86/Drod86.github.io', 
      './images/project_bg_web.jpg'
    ),
  ]
}

export default db;