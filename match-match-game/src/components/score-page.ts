import { Header } from './header';
import { Score } from './score';

export class ScorePage {
  elements: HTMLElement[];

  constructor() {
    this.elements = [new Header().element, new Score().element];
  }
}
