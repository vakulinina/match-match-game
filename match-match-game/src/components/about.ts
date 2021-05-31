import { BaseComponent } from './base-component';

export class About extends BaseComponent {
  constructor() {
    super('div', ['about-game']);
    this.element.innerHTML = `
      <h2>How to play?</h2>
      <ol>
        <li>1. Register new player in game</li>
        <li>2. Configure your game settings</li>
        <li>3. Start you new game! Remember card positions and match it before time's up.</li>
      </ol>
    `;
  }
}
