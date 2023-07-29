const badge = (text, classList) => {
  let classes = classList.length > 0 
   ? classList.reduce((acc, cl) => {
    return acc += cl;}, '')
   : '';

  return `<li class="badge ${classes}">${text}</li>`;
};

const badges = (badgesDataArray) => {
  return `<ul class="badges">
            ${badgesDataArray.reduce((acc, badgeDataObj) => {
              const {text, classList} = badgeDataObj;
              return acc += badge(text, classList);
            }, '')}
          </ul>`;
};

export {badge, badges};