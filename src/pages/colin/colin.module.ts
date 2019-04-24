import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ColinPage } from './colin';

@NgModule({
  declarations: [
    ColinPage,
  ],
  imports: [
    IonicPageModule.forChild(ColinPage),
  ],
})
export class ColinPageModule {}
