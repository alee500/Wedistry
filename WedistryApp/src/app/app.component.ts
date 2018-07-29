import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { JoinPage } from '../pages/join/join';
import { LogoutPage } from '../pages/logout/logout';

import { InvitationPage } from '../pages/invitation/invitation';
import { RsvpPage } from '../pages/rsvp/rsvp';
import { Rsvp2Page } from '../pages/rsvp2/rsvp2';
import { Rsvp3Page } from '../pages/rsvp3/rsvp3';
import { Rsvp4Page } from '../pages/rsvp4/rsvp4';
import { RegistryPage } from '../pages/registry/registry';
import { CalendarPage } from '../pages/calendar/calendar';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Join', component: JoinPage },
      { title: 'Logout', component: LogoutPage },
      { title: 'Invitation', component: InvitationPage },
      { title: 'RSVP', component: RsvpPage },
      { title: 'RSVP 2', component: Rsvp2Page },
      { title: 'RSVP 3', component: Rsvp3Page },
      { title: 'RSVP 4', component: Rsvp4Page },
      { title: 'Registry', component: RegistryPage },
      { title: 'Calendar', component: CalendarPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
