import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResistancePage } from './resistance';

@NgModule({
  declarations: [
    ResistancePage,
  ],
  imports: [
    IonicPageModule.forChild(ResistancePage),
  ],
})
export class ResistancePageModule {}
