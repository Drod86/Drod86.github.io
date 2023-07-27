const blurb = (blurbArray, parent) => {
  return parent
  ? blurbArray.reduce((acc, text) => acc += `<p class="blurb">${text}</p>`
, '')
  : `<p class="blurb">${blurbArray[0]}</p>`
};

export default blurb;