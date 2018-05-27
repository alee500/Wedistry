import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistryPage } from './registry';

@NgModule({
  declarations: [
    RegistryPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistryPage),
  ],
})
export class RegistryPageModule {}
