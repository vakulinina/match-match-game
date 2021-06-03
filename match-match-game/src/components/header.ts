import { BaseComponent } from './base-component';
import { StartButton } from './start-button';
import { StopButton } from './stop-button';

export class Header extends BaseComponent {
  private startButton: StartButton;

  private stopButton: StopButton;

  constructor(isGame = false) {
    super('header', []);
    this.startButton = new StartButton();
    this.stopButton = new StopButton();
    this.element.innerHTML = `
      <span class="logo">MATCH<br>MATCH</span>
      <nav class="navbar">
        <ul class="nav-items">
          <li><a class="nav-link nav-link-active" data-href="about" href="#about">About Game</a></li>
          <li><a class="nav-link" data-href="score" href="#score">Best Score</a></li>
          <li><a class="nav-link" data-href="settings" href="#settings">Game Settings</a></li>
        </ul>
      </nav>
    `;
    this.element.append(
      isGame ? this.stopButton.element : this.startButton.element
    );
  }
}
