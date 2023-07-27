import {badges} from './badges.mjs';
import heading from './heading.mjs';
import blurb from './blurb.mjs';
import button from './button.mjs';

const card = (projectObj, id) => {
  const {bdgs, imgUrl, headingText, blurbs} = projectObj;
  return `
    <article class="card" style="background-image: url(${imgUrl});">
      ${heading(3, headingText)}
      ${blurb(blurbs)}
      ${badges(bdgs)}
      ${button('See project', id)}
    </article>
  `
}

export default card;