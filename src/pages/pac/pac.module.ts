import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PacPage } from './pac';

@NgModule({
  declarations: [
    PacPage,
  ],
  imports: [
    IonicPageModule.forChild(PacPage),
  ],
})
export class PacPageModule {}
