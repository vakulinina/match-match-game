import { BaseComponent } from './base-component';

export class WinPopup extends BaseComponent {
  constructor() {
    super('div', ['win-popup']);
    this.element.innerHTML = `
      <p class="win-text">High five!</p>
      <a href="#game"><button class="new-game-btn">NEW GAME</button></a>
    `;
  }
}
