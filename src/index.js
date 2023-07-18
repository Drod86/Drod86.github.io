'use strict'

import './styles/index.scss'
import styles from './styles/styles.module.scss';

console.log("It is really working");
// console.log(heading);

const obj = {
  a: 'apple crisp',
  b: 'buttercream',
  c: {
    cd: 'cheese danish'
  },
};

console.log(obj?.c?.cd, obj?.f?.fa);

const h5 = document.querySelector('h5');
h5.className = styles.heading;

if (module.hot) {
  module.hot.accept();
}