import './style.css';
import { App } from './app';
import { Router } from './shared/router';

window.onload = () => {
  const appElement = document.getElementById('app');

  if (!appElement) throw Error('App root element not found');

  const app = new App(appElement);
  const router = new Router();

  router.handleRouting(app);

  window.onpopstate = () => {
    app.main.element.innerHTML = '';
    router.handleRouting(app);
  };
};
