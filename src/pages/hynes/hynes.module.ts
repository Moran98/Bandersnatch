import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HynesPage } from './hynes';

@NgModule({
  declarations: [
    HynesPage,
  ],
  imports: [
    IonicPageModule.forChild(HynesPage),
  ],
})
export class HynesPageModule {}
