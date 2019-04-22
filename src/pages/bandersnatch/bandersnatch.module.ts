import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BandersnatchPage } from './bandersnatch';

@NgModule({
  declarations: [
    BandersnatchPage,
  ],
  imports: [
    IonicPageModule.forChild(BandersnatchPage),
  ],
})
export class BandersnatchPageModule {}
