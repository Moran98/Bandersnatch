import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BPage1Page } from './b-page1';

@NgModule({
  declarations: [
    BPage1Page,
  ],
  imports: [
    IonicPageModule.forChild(BPage1Page),
  ],
})
export class BPage1PageModule {}
