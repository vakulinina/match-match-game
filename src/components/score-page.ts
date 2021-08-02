import Header from './header';
import Score from './score';

export default class ScorePage {
  elements: HTMLElement[];

  constructor() {
    this.elements = [new Header().element, new Score().element];
  }
}
