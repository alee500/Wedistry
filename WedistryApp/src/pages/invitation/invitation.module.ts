import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvitationPage } from './invitation';

@NgModule({
  declarations: [
    InvitationPage,
  ],
  imports: [
    IonicPageModule.forChild(InvitationPage),
  ],
})
export class InvitationPageModule {}
