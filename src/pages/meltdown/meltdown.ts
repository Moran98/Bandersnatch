import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KillPage } from '../kill/kill';
import { BackoffPage } from '../backoff/backoff';

/**
 * Generated class for the MeltdownPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meltdown',
  templateUrl: 'meltdown.html',
})
export class MeltdownPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeltdownPage');
  }

  Choice1()
  {
    this.navCtrl.push(KillPage);
  }

  Choice2()
  {
    this.navCtrl.push(BackoffPage);
  }

}
