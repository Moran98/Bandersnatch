import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RefusePage } from './refuse';

@NgModule({
  declarations: [
    RefusePage,
  ],
  imports: [
    IonicPageModule.forChild(RefusePage),
  ],
})
export class RefusePageModule {}
