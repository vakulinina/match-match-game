import { BaseComponent } from './base-component';
import { Card } from './card';

const SHOW_TIME = 1;

export class CardsField extends BaseComponent {
  private cards: Card[] = [];

  constructor() {
    super('ul', ['card-board']);
  }

  clear(): void {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]): void {
    this.cards = cards;
    this.cards.forEach((card) => this.element.appendChild(card.element));
    setTimeout(() => {
      this.cards.forEach((card) => card.close());
    }, SHOW_TIME * 1000);
  }
}
