import { BaseComponent } from './base-component';

export class Timer extends BaseComponent {
  count: number;

  constructor() {
    super('div', ['timer']);
    this.count = 0;
    this.element.innerHTML = `<span>00 : 00</span>`;
  }

  start() {
    setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.count++;
    const minutes = Math.trunc((this.count / 60) % 60);
    const seconds = Math.trunc(this.count % 60);
    this.element.innerHTML = `
      <span>
        ${minutes < 10 ? `0${minutes}` : minutes} :
          ${seconds < 10 ? `0${seconds}` : seconds}
      </span>
    `;
  }
}
