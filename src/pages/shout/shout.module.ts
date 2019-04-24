import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoutPage } from './shout';

@NgModule({
  declarations: [
    ShoutPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoutPage),
  ],
})
export class ShoutPageModule {}
