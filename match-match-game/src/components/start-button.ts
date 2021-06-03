import { BaseComponent } from './base-component';

export class StartButton extends BaseComponent {
  constructor() {
    super('a', []);
    this.element.setAttribute('href', '#game');
    this.element.innerHTML = `
      <button class="game-btn">Start Game</button>
    `;
  }
}
