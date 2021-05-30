import { Game } from './components/game';
import { ImageCategoryModel } from './models/image-category-model';
import { Header } from './components/header';

export class App {
  private readonly header: Header;

  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.game = new Game();
    this.rootElement.append(this.header.element, this.game.element);
  }

  render(): void{
    this.rootElement.append(this.header.element, this.game.element);
    this.game.start();
  }
}
