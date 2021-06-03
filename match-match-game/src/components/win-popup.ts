import { BaseComponent } from './base-component';

export class WinPopup extends BaseComponent {
  constructor(score: number) {
    super('div', ['win-popup']);
    this.element.innerHTML = `
      <p class="win-text">High five! <br> Your score is ${score}</p>
      <a href="#score"><button class="new-game-btn">SCORE BOARD</button></a>
    `;
  }
}
