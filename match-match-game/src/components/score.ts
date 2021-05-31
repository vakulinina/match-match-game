import { BaseComponent } from './base-component';

export class Score extends BaseComponent {
  constructor() {
    super('div', ['score']);
    this.element.innerHTML = `
      <h2>Best players</h2>
      <ul>
        <li class="score-list-item">
          <p>Connor Mason</p>
          <p>Score: 544</p>
        </li>
        <li class="score-list-item">
          <p>Mike Kerr</p>
          <p>Score: 377</p>
        </li>
        <li class="score-list-item">
          <p>Brandon Flowers</p>
          <p>Score: 376</p>
        </li>
      </ul>
    `;
  }
}
