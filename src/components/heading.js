const heading = (type, text) => {
  return `
    <h${type} class="heading">${text}</h${type}>
  `
}

export default heading;