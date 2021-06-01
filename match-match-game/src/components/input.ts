import { BaseComponent } from './base-component';

export class Input extends BaseComponent {
  type: string;

  constructor(type: string) {
    super('input', ['form-submit-btn']);
    this.type = type;
    this.element.setAttribute('type', type);
  }
}
