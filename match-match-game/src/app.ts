import { Game } from './components/game';
import { Header } from './components/header';
import { BaseComponent } from './components/base-component';

export class App {
  private readonly header: Header;

  readonly main: BaseComponent;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.main = new BaseComponent('main', []);
    this.rootElement.append(this.header.element, this.main.element);
  }
}
