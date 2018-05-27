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
import { RegistryPage } from '../pages/registry/registry';
import { RsvpPage } from '../pages/rsvp/rsvp';
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
		RegistryPage,
		RsvpPage,
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
		RegistryPage,
		RsvpPage,
		CalendarPage		
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
