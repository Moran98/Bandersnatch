import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BandersnatchPage } from '../bandersnatch/bandersnatch';
import { MorningPage } from '../morning/morning';

/**
 * Generated class for the PaxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pax',
  templateUrl: 'pax.html',
})
export class PaxPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaxPage');
  }

  Choice1()
  {
    this.navCtrl.push(MorningPage);
  }


}
