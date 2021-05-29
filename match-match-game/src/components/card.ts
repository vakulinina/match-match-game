import { BaseComponent } from './base-component';

const FLIP_CLASS = 'flipped';

export class Card extends BaseComponent {
  isOpen = false;

  constructor(readonly image: string) {
    super('li', ['card', 'flipped']);

    this.element.innerHTML = `
      <div class="card-front">
      </div>
      <div class="card-back">
        <img src=${image} alt="" />
      </div>
    `;
  }

  open(): Promise<void> {
    this.isOpen = true;
    return new Promise((resolve) => {
      this.element.classList.add(FLIP_CLASS);
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }

  close(): Promise<void> {
    this.isOpen = false;
    return new Promise((resolve) => {
      this.element.classList.remove(FLIP_CLASS);
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }
}
