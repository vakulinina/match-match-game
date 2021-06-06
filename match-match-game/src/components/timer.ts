import BaseComponent from './base-component';

export default class Timer extends BaseComponent {
  time: number;

  counter!: NodeJS.Timeout;

  constructor() {
    super('div', ['timer']);
    this.time = 0;
    this.element.innerHTML = `<span>00 : 00</span>`;
  }

  start(): void {
    this.counter = setInterval(() => this.tick(), 1000);
  }

  tick(): void {
    this.time = +1;
    const minutes = Math.trunc((this.time / 60) % 60);
    const seconds = Math.trunc(this.time % 60);
    this.element.innerHTML = `
      <span>
        ${minutes < 10 ? `0${minutes}` : minutes} :
          ${seconds < 10 ? `0${seconds}` : seconds}
      </span>
    `;
  }

  stop(): void {
    clearInterval(this.counter);
  }
}
