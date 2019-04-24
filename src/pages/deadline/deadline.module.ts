import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeadlinePage } from './deadline';

@NgModule({
  declarations: [
    DeadlinePage,
  ],
  imports: [
    IonicPageModule.forChild(DeadlinePage),
  ],
})
export class DeadlinePageModule {}
