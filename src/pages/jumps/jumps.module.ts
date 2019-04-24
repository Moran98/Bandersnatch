import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JumpsPage } from './jumps';

@NgModule({
  declarations: [
    JumpsPage,
  ],
  imports: [
    IonicPageModule.forChild(JumpsPage),
  ],
})
export class JumpsPageModule {}
