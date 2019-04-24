import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MorningPage } from './morning';

@NgModule({
  declarations: [
    MorningPage,
  ],
  imports: [
    IonicPageModule.forChild(MorningPage),
  ],
})
export class MorningPageModule {}
