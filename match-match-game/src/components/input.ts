import { BaseComponent } from './base-component';

export class Input extends BaseComponent {
  constructor(type: string) {
    super('input', ['form-submit-btn']);
    this.element.setAttribute('type', type);
  }
}
