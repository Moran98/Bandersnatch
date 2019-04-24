import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BackoffPage } from '../backoff/backoff';
import { BuryPage } from '../bury/bury';
import { ChopPage } from '../chop/chop';

/**
 * Generated class for the KillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kill',
  templateUrl: 'kill.html',
})
export class KillPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KillPage');
  }

  Choice1()
  {
    this.navCtrl.push(BuryPage);
  }

  Choice2()
  {
    this.navCtrl.push(ChopPage);
  }

}
