import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToyPage } from './toy';

@NgModule({
  declarations: [
    ToyPage,
  ],
  imports: [
    IonicPageModule.forChild(ToyPage),
  ],
})
export class ToyPageModule {}
