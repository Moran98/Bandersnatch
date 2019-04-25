import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BandersnatchPage } from '../bandersnatch/bandersnatch';

/**
 * Generated class for the Ending4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ending4',
  templateUrl: 'ending4.html',
})
export class Ending4Page {

  score : number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ending4Page');
  }

  Choice1()
  {
    this.navCtrl.push(BandersnatchPage);
  }

}
