import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RsvpPage } from './rsvp';

@NgModule({
  declarations: [
    RsvpPage,
  ],
  imports: [
    IonicPageModule.forChild(RsvpPage),
  ],
})
export class RsvpPageModule {}
