import { header, grid_item } from './header.module.scss';
import { grid  } from './grid.module.scss';

const Header = () => {
  return `
    <header class="${header}">
      <div class="${grid_item}">
        <a class="logo" href="#">My Logo</a>
        <nav class="nav">
          <li class="item">
            <a class="link" href="#portfolio">Portfolio</a>
          </li>
          <li class="item">
            <a class="link" href="#about">About</a>
          </li>
          <li class="item">
            <a class="link" href="#contact">Contact</a>
          </li>
          <li class="menu">
            <a class="link" href="mailto:daniel.r.rodriguez86@gmail.com"
            >
              <svg class="icon icon--d">
                <use xlink:href="./images/sprite.svg#mail"></use>
              </svg>
            </a>
            <svg class="icon icon--m">
              <use xlink:href="./images/sprite.svg#menu"></use>
            </svg>  
          </li>
        </nav>
      </div>
    </header>`
}

export default Header;