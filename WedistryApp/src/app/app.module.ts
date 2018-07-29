import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
		SettingsPage,
		JoinPage,
		LogoutPage,
		InvitationPage,
		RsvpPage,
		Rsvp2Page,
		Rsvp3Page,
		Rsvp4Page,
		RegistryPage,
		CalendarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
		SettingsPage,
		JoinPage,
		LogoutPage,
		InvitationPage,
		RsvpPage,
		Rsvp2Page,
		Rsvp3Page,
		Rsvp4Page,
		RegistryPage,
		CalendarPage		
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
