import { BaseComponent } from './base-component';

export class Header extends BaseComponent {
  constructor() {
    super('header', []);
    // Move navbar to separate component (to render it with different active buttons)
    this.element.innerHTML = `
      <span class="logo">MATCH<br>MATCH</span>
      <nav class="navbar">
        <ul class="nav-items">
          <li><a class="nav-link nav-link-active" data-href="about" href="#about">About Game</a></li>
          <li><a class="nav-link" data-href="game" href="#game">Game</a></li>
          <li><a class="nav-link" data-href="settings" href="#settings">Game Settings</a></li>
        </ul>
      </nav>
      <a href="#game"><button class="start-game-btn">Start Game</button></a>
    `;
  }
}
