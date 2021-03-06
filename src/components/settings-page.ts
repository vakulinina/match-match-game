import Header from './header';
import Settings from './settings';

export default class SettingsPage {
  elements: HTMLElement[];

  constructor() {
    this.elements = [new Header().element, new Settings().element];
  }
}
