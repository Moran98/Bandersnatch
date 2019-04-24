import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JumpcPage } from './jumpc';

@NgModule({
  declarations: [
    JumpcPage,
  ],
  imports: [
    IonicPageModule.forChild(JumpcPage),
  ],
})
export class JumpcPageModule {}
