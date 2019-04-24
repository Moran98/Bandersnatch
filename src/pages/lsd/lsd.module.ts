import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LsdPage } from './lsd';

@NgModule({
  declarations: [
    LsdPage,
  ],
  imports: [
    IonicPageModule.forChild(LsdPage),
  ],
})
export class LsdPageModule {}
