import { BaseComponent } from './base-component';
import { Form } from './registration-form';

export class About extends BaseComponent {
  form: Form;

  constructor() {
    super('div', ['about-game']);
    this.form = new Form();
    this.element.innerHTML = `
      <h2>How to play?</h2>
      <ol class="how-to-play-list">
        <li>1. Register new player in game</li>
        <li>2. Or don't (for now)</li>
        <li>3. Start you new game! Remember card positions and match it before time's up.</li>
      </ol>
    `;
    this.element.append(this.form.element);
  }
}
