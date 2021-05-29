import { Game } from './components/game';
import { ImageCategoryModel } from './models/image-category-model';

export class App {
  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game();
    this.rootElement.appendChild(this.game.element);
  }

  async start(): Promise<void> {
    const response = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await response.json();
    const selectedCategory = categories[0];
    const images = selectedCategory.images.map(
      (filename: string) => `../images/${selectedCategory.category}/${filename}`
    );
    this.game.newGame(images);
  }
}
