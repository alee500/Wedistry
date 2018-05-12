import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { InvitationPage } from '../invitation/invitation';
import { RsvpPage } from '../rsvp/rsvp';
import { VideoPage } from '../video/video';
import { RegistryPage } from '../registry/registry';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = InvitationPage;
  tab3Root = RsvpPage;
  tab4Root = VideoPage;
  tab5Root = RegistryPage;

  constructor() {

  }
}

