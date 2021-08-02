import BaseComponent from './base-component';

export default class Settings extends BaseComponent {
  constructor() {
    super('main', ['settings']);
    this.element.innerHTML = `
      <h2>Game settings</h2>
      <label>Difficulty<br>
        <select size="1" name="difficulty">
          <option disabled>Choose difficulty</option>
          <option value="8">4x4</option>
          <option value="18">6x6</option>
          <option value="32">8x8</option>
        </select>
      </label>
      <label>Game cards<br>
        <select size="1" name="cards-category">
          <option disabled>Choose cards type</option>
          <option value="cats">Cats</option>
          <option value="cats">Dogs</option>
        </select>
      </label>
    `;
  }
}
