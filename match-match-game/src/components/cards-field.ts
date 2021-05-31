import { BaseComponent } from './base-component';
import { Card } from './card';

const SHOW_TIME = 3;

export class CardsField extends BaseComponent {
  private cards: Card[] = [];

  constructor() {
    super('ul', ['card-board']);
  }

  clear(): void {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]): Promise<void> {
    this.cards = cards;
    this.cards.forEach((card) => this.element.appendChild(card.element));
    return new Promise((resolve) => {
      setTimeout(() => {
        this.cards.forEach((card) => card.close());
        resolve();
      }, SHOW_TIME * 1000);
    });
  }
}
