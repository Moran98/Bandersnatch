import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThompsonPage } from './thompson';

@NgModule({
  declarations: [
    ThompsonPage,
  ],
  imports: [
    IonicPageModule.forChild(ThompsonPage),
  ],
})
export class ThompsonPageModule {}
