import { grab, checkStyle, render } from "../utils/utils.mjs";

import { badges } from "./badges.mjs";
import heading from "./heading.mjs";
import blurb from "./blurb.mjs";

const modal = (obj, id) => {
  const {headingText, bdgs, modalImgUrl, imgAlt, blurbs, liveUrl, githubUrl} = obj[id];

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
            <a href="${liveUrl}" target="_blank">
              <button type="button" class="btn">
                See live
                <svg class="icon">
                  <use xlink:href="./images/sprite.svg#see_live"></use>
                </svg>
              </button>
            </a>
            <a href="${githubUrl}" target="_blank">
              <button type="button" class="btn">
                See source
                <svg class="icon">
                  <use xlink:href="./images/sprite.svg#github"></use>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </article>
    </section>
  `
  return markup;
}

export default modal;