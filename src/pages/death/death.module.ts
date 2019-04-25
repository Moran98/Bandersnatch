import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeathPage } from './death';

@NgModule({
  declarations: [
    DeathPage,
  ],
  imports: [
    IonicPageModule.forChild(DeathPage),
  ],
})
export class DeathPageModule {}
