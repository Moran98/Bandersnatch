import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IgnorePage } from './ignore';

@NgModule({
  declarations: [
    IgnorePage,
  ],
  imports: [
    IonicPageModule.forChild(IgnorePage),
  ],
})
export class IgnorePageModule {}
