import { GamePage } from './components/game-page';

export class App {
  page: GamePage;

  constructor(private readonly rootElement: HTMLElement) {
    this.page = new GamePage();
  }

  render(): void{
    this.rootElement.append(...this.page.elements);
  }
}
