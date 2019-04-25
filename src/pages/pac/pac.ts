import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MorningPage } from '../morning/morning';
import { ToyPage } from '../toy/toy';

/**
 * Generated class for the PacPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pac',
  templateUrl: 'pac.html',
})
export class PacPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PacPage');
  }

  Choice1()
  {
    this.navCtrl.push(MorningPage);
  }

  Choice2()
  {
    this.navCtrl.push(ToyPage);
  }

}
