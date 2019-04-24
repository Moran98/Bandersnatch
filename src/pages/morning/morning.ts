import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BandersnatchPage } from '../bandersnatch/bandersnatch';
import { MeltdownPage } from '../meltdown/meltdown';

/**
 * Generated class for the MorningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-morning',
  templateUrl: 'morning.html',
})
export class MorningPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorningPage');
  }

  Choice1()
  {
    this.navCtrl.push(MeltdownPage);
  }

}
