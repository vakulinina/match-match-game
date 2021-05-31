import { App } from '../app';

export interface Route {
  name: string;
  component: (app: App) => void;
}
