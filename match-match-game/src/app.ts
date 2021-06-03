import { Header } from './components/header';
import { BaseComponent } from './components/base-component';
import { GamePage } from './components/game-page';

export class App {
  // readonly header: Header;

  // readonly main: BaseComponent;

  page: GamePage;

  constructor(private readonly rootElement: HTMLElement) {
    this.page = new GamePage();
  }

  render() {
    this.rootElement.append(...this.page.elements);
  }
}
