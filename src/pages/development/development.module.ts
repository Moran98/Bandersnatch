import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevelopmentPage } from './development';

@NgModule({
  declarations: [
    DevelopmentPage,
  ],
  imports: [
    IonicPageModule.forChild(DevelopmentPage),
  ],
})
export class DevelopmentPageModule {}
