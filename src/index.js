import './styles/styles.scss'
import Button from './components/button.mjs';


console.log('JS is running!!!!!');

const btn = document.querySelector('.logo');
console.log(btn);
btn.innerHTML = Button('testing123');
