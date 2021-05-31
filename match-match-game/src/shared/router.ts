import { App } from '../app';
import { About } from '../components/about';
import { Game } from '../components/game';
import { Route } from '../models/route-model';
import { Settings } from '../components/settings';
import { Score } from '../components/score';

export class Router {
  private readonly routes: Route[];

  private readonly defaultRoute: Route;

  private currentRoute: Route;

  constructor() {
    this.routes = [
      {
        name: 'about',
        component(app: App) {
          app.main.element.appendChild(new About().element);
        },
      },
      {
        name: 'settings',
        component(app: App) {
          const settings = new Settings();
          app.main.element.appendChild(settings.element);
        },
      },
      {
        name: 'score',
        component(app: App) {
          const score = new Score();
          app.main.element.appendChild(score.element);
        },
      },
      {
        name: 'game',
        component(app: App) {
          const game = new Game();
          app.main.element.appendChild(game.element);
          game.start();
        },
      }
    ];
    this.defaultRoute = {
      name: 'default',
      component(app: App) {
        app.main.element?.appendChild(new About().element);
      },
    };
    this.currentRoute = this.defaultRoute;
  }

  handleRouting(app: App): void {
    const currentRouteName = window.location.hash.slice(1);
    this.currentRoute =
      this.routes.find((p) => p.name === currentRouteName) || this.defaultRoute;
    this.activateHeaderLink();
    this.currentRoute.component(app);
  }

  activateHeaderLink(): void {
    const ACTIVE_CLASS = 'nav-link-active';
    const navLinks = document.getElementsByClassName('nav-link');
    [...navLinks].forEach((link) => link.classList.remove(ACTIVE_CLASS));
    const linkToActivate = [...navLinks].find((link) =>
      link instanceof HTMLElement
        ? link.dataset.href === this.currentRoute.name
        : false
    );
    linkToActivate?.classList.add(ACTIVE_CLASS);
  }
}
