import { BaseComponent } from './base-component';

export class About extends BaseComponent {
  constructor() {
    super('div', ['about-game']);
    this.element.innerHTML = `
      <p>About Game</p>
    `;
  }
}
