import { Component, ViewChild, ApplicationRef, Injector } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  congress: string;

  pages: Array<{title: string, component: any}>;

  constructor(public app: ApplicationRef, injector: Injector, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // For normal components we would use @Input to access the props, but his deoes not work on the App, the root component.
    // So we use this trick to access the `congress` attribute
    let element = injector.get(this.app.componentTypes[0]).getNativeElement()
    this.congress = element.getAttribute('congress')

    // used for an example of ngFor and navigation
    this.pages = [
      { title: `Congress #${this.congress}`, component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
