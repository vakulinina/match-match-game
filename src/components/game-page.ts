import Header from './header';
import Game from './game';

export default class GamePage {
  elements: HTMLElement[];

  constructor() {
    this.elements = [new Header(true).element, new Game().element];
  }
}
