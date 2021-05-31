import { BaseComponent } from './base-component';
import { Card } from './card';
import { CardsField } from './cards-field';
import { delay } from '../shared/delay';
import { ImageCategoryModel } from '../models/image-category-model';
import { Timer } from './timer';
import { WinPopup } from './win-popup';

const FLIP_DELAY = 500;

export class Game extends BaseComponent {
  private readonly cardsField: CardsField;

  private activeCard?: Card;

  private timer: Timer;

  private isAnimation = false;

  private pairsOpen = 0;

  totalPairs: number;

  winPopup: WinPopup;

  constructor() {
    super('div', ['game']);
    this.cardsField = new CardsField();
    this.timer = new Timer;
    this.winPopup = new WinPopup();
    this.element.append(this.timer.element, this.cardsField.element);
    this.totalPairs = 8;
  }

  async start(): Promise<void> {
    const response = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await response.json();
    const selectedCategory = categories[0];
    const images = selectedCategory.images.map(
      (filename: string) => `../images/${selectedCategory.category}/${filename}`
    );
    this.newGame(images);
  }

  async newGame(images: string[]): Promise<void> {
    this.cardsField.clear();
    this.pairsOpen = 0;
    const cards = images.concat(images).map((url) => new Card(url));
    // .sort(() => Math.random() - 0.5);

    cards.forEach((card) =>
      card.element.addEventListener('click', () => this.cardHandler(card))
    );

    await this.cardsField.addCards(cards);
    this.timer.start();
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

    this.pairsOpen++;

    if (this.pairsOpen === this.totalPairs) this.finish();
    this.activeCard = undefined;
    this.isAnimation = false;
  }

  finish() {
    this.timer.stop();
    this.element.append(this.winPopup.element);
  }
}