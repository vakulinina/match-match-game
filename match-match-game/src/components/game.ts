import { BaseComponent } from './base-component';
import { Card } from './card';
import { CardsField } from './cards-field';
import { delay } from '../shared/delay';

const FLIP_DELAY = 500;

export class Game extends BaseComponent {
  private readonly cardsField: CardsField;

  private activeCard?: Card;

  private isAnimation = false;

  constructor() {
    super('main', []);
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
  }

  newGame(images: string[]): void {
    this.cardsField.clear();
    const cards = images.concat(images).map((url) => new Card(url));
    // .sort(() => Math.random() - 0.5);

    cards.forEach((card) =>
      card.element.addEventListener('click', () => this.cardHandler(card))
    );

    this.cardsField.addCards(cards);
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (card.isOpen) return;

    this.isAnimation = true;
    await card.open();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      // TODO: add color backlight for match case and error
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.close(), card.close()]);
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }

  // TODO: add finish() {}
}
