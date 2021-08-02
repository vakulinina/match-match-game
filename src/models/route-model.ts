import App from '../app';

export default interface Route {
  name: string;
  component: (app: App) => void;
}
