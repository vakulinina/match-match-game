import BaseComponent from './base-component';

export default class StopButton extends BaseComponent {
  constructor() {
    super('a', []);
    this.element.setAttribute('href', '#about');
    this.element.innerHTML = `
      <button class="game-btn">Stop Game</button>
    `;
  }
}
