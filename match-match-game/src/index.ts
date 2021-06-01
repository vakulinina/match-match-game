import './style.css';
import { App } from './app';
import { Router } from './shared/router';

window.onload = () => {
  const appElement = document.getElementById('app');

  if (!appElement) throw Error('App root element not found');

  const app = new App(appElement);
  const router = new Router();

  router.handleRouting(app);

  window.onpopstate = () => {
    app.main.element.innerHTML = '';
    router.handleRouting(app);
  };
  // NEW CODE

  const button = document.querySelector('.form-submit-btn');

  const validateForm = () => {
    const nameField = <HTMLInputElement>document.querySelector('#user-name');
    const lastNameField = <HTMLInputElement>(
      document.querySelector('#user-last-name')
    );
    const emailField = <HTMLInputElement>document.querySelector('#user-email');
    const namePattern = /[a-zA-Z]+/;
    const lastNamePattern = /[a-zA-Z]+/;
    const emailPattern = new RegExp(
      '^([^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40' +
        '\\x5b-\\x5d\\x7f-\\xff]+|\\x22([^\\x0d\\x22\\x5c\\x80-\\xff]' +
        '|\\x5c[\\x00-\\x7f])*\\x22)(\\x2e([^\\x00-\\x20\\x22\\x28\\x' +
        '29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+|\\x' +
        '22([^\\x0d\\x22\\x5c\\x80-\\xff]|\\x5c[\\x00-\\x7f])*\\x22)' +
        ')*\\x40([^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3' +
        'e\\x40\\x5b-\\x5d\\x7f-\\xff]+|\\x5b([^\\x0d\\x5b-\\x5d\\x80' +
        '-\\xff]|\\x5c[\\x00-\\x7f])*\\x5d)(\\x2e([^\\x00-\\x20\\x22' +
        '\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xf' +
        'f]+|\\x5b([^\\x0d\\x5b-\\x5d\\x80-\\xff]|\\x5c[\\x00-\\x7f]' +
        ')*\\x5d))*$'
    );

    if (!emailField.value || !emailPattern.test(emailField.value)) {
      console.log(false);
      emailField.classList.add('invalid');
    } else {
      console.log(true);
      emailField.classList.remove('invalid');
    }
  };

  // button?.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   validateForm();
  // });
};
