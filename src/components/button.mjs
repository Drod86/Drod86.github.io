import classes from './button.module.scss';

const Button = (text) => {
  return `<button class="${classes.primary}">${text}</button>`
}

export default Button;