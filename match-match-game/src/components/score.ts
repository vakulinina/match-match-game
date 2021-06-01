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
        <li class="score-list-item">
          <p>Marko Saaresto</p>
          <p>Score: 375</p>
        </li>
        <li class="score-list-item">
          <p>Patrick James Grossi</p>
          <p>Score: 374</p>
        </li>
        <li class="score-list-item">
          <p>Brendon Urie</p>
          <p>Score: 373</p>
        </li>
        <li class="score-list-item">
          <p>Matt Bellamy</p>
          <p>Score: 372</p>
        </li>
        <li class="score-list-item">
          <p>Lynn Gunn</p>
          <p>Score: 371</p>
        </li>
        <li class="score-list-item">
          <p>Jared Leto</p>
          <p>Score: 370</p>
        </li>
        <li class="score-list-item">
          <p>Hannah Reid</p>
          <p>Score: 369</p>
        </li>
      </ul>
    `;
  }
}
