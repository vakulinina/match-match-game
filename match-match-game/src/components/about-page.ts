import Header from './header';
import About from './about';

export default class AboutPage {
  elements: HTMLElement[];

  constructor() {
    this.elements = [new Header().element, new About().element];
  }
}
