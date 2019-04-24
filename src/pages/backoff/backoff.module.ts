import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackoffPage } from './backoff';

@NgModule({
  declarations: [
    BackoffPage,
  ],
  imports: [
    IonicPageModule.forChild(BackoffPage),
  ],
})
export class BackoffPageModule {}
