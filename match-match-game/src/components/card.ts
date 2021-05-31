import { BaseComponent } from './base-component';

const FLIP_CLASS = 'flipped';
const FLIP_DELAY = 500;

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

  markWrong(): Promise<void> {
    return new Promise((resolve) => {
      const WRONG_CLASS = 'wrong';
      this.element.lastElementChild?.classList.add(WRONG_CLASS);
      setTimeout(() => {
        this.element.lastElementChild?.classList.remove(WRONG_CLASS);
        resolve();
      }, FLIP_DELAY);
    });
  }

  markCorrect(): void {
    this.element.lastElementChild?.classList.add('correct');
  }
}
