import { grab, checkStyle, render } from "../utils/utils.mjs";

import { badges } from "./badges.mjs";
import heading from "./heading.mjs";
import blurb from "./blurb.mjs";

const modal = (obj, id) => {
  const {headingText, bdgs, modalImgUrl, imgAlt, blurbs} = obj[id];

  let markup = `
    <section class="recent-works grid-item">
      ${heading(2, headingText)}
      ${badges(bdgs)}
      <section class="feature">
        <img
          class="img"
          src="${modalImgUrl}"
          alt="${imgAlt}"
        />
        <article class="card">
          ${blurb(blurbs, 'modal')}
          <div class="btns">
            <button type="button" class="btn">
              See live
              <svg class="icon">
                <use xlink:href="./images/sprite.svg#see_live"></use>
              </svg>
            </button>
            <button type="button" class="btn">
              See source
              <svg class="icon">
                <use xlink:href="./images/sprite.svg#github"></use>
              </svg>
            </button>
          </div>
        </div>
      </article>
    </section>
  `
  return markup;
}

const toggleModal = (el, obj, id) => {
  let markup = '';
  let hidden = checkStyle(el, '.modal', 'display') === 'none';
  if (hidden) {
    markup = modal(obj, id);
    render(el, markup);
    el.style.display = 'inline-block';
  } else {
    render(el, markup);
    el.style.display = 'none';
  }
}

export {toggleModal, modal};