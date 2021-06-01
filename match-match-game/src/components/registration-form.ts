import { BaseComponent } from './base-component';
import { Input } from './input';

export class Form extends BaseComponent {
  private submitBtn: Input;

  constructor() {
    super('form', ['register-form']);
    this.submitBtn = new Input('submit');
    this.element.innerHTML = `
        <h2>Register new player</h2>
        <label for="name">First Name</label>
        <input class="form-input" type="text" name="user-name" id="user-name" required>
        <label for="last-name">Last Name</label>
        <input class="form-input" type="text" name="user-last-name" id="user-last-name" required>
        <label for="email">E-mail</label>
        <input class="form-input" type="email" name="user-email" id="user-email" required>
        <br />
    `;
    this.submitBtn.element.setAttribute('value', 'Add user');
    this.submitBtn.element.addEventListener('click', (event) => {
      event.preventDefault();
      if (this.isValid())
        this.element.innerHTML = '<p><b>You are registered</b><p>';
    });
    this.element.append(this.submitBtn.element);
  }

  isValid(): boolean {
    const nameField = <HTMLInputElement>document.querySelector('#user-name');
    const lastNameField = <HTMLInputElement>(
      document.querySelector('#user-last-name')
    );
    const emailField = <HTMLInputElement>document.querySelector('#user-email');
    const namePattern = new RegExp('^[a-zA-Z]+$');
    const lastNamePattern = new RegExp('^[a-zA-Z]+$');
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

    let validity = true;
    const INVALID_CLASS = 'invalid';

    if (!nameField.value || !namePattern.test(nameField.value)) {
      nameField.classList.add(INVALID_CLASS);
      validity = false;
    } else {
      nameField.classList.remove(INVALID_CLASS);
    }

    if (!lastNameField.value || !lastNamePattern.test(lastNameField.value)) {
      lastNameField.classList.add(INVALID_CLASS);
      validity = false;
    } else {
      lastNameField.classList.remove(INVALID_CLASS);
    }

    if (!emailField.value || !emailPattern.test(emailField.value)) {
      emailField.classList.add(INVALID_CLASS);
      validity = false;
    } else {
      emailField.classList.remove(INVALID_CLASS);
      console.log(this);
    }

    return validity;
  }
}
