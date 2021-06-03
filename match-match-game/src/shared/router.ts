import { App } from '../app';
import { Route } from '../models/route-model';
import { GamePage } from '../components/game-page';
import { AboutPage } from '../components/about-page';
import { SettingsPage } from '../components/settings-page';
import { ScorePage } from '../components/score-page';

export class Router {
  private readonly routes: Route[];

  private readonly defaultRoute: Route;

  private currentRoute: Route;

  constructor() {
    this.routes = [
      {
        name: 'about',
        component(app: App) {
          app.page = new AboutPage();
        },
      },
      {
        name: 'settings',
        component(app: App) {
          app.page = new SettingsPage();
        },
      },
      {
        name: 'score',
        component(app: App) {
          app.page = new ScorePage();
        },
      },
      {
        name: 'game',
        component(app: App) {
          app.page = new GamePage();
        },
      },
    ];
    this.defaultRoute = {
      name: 'default',
      component(app: App) {
        app.page = new AboutPage();
      },
    };
    this.currentRoute = this.defaultRoute;
  }

  handleRouting(app: App, currentRouteName: string): void {
    this.currentRoute =
      this.routes.find((p) => p.name === currentRouteName) || this.defaultRoute;
    this.currentRoute.component(app);
    app.render();
    this.activateHeaderLink();
  }

  private activateHeaderLink(): void {
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
