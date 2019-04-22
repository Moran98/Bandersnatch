import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntroductionPage } from '../introduction/introduction';
import { BandersnatchPage } from '../bandersnatch/bandersnatch';

/**
 * Generated class for the SelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selection',
  templateUrl: 'selection.html',
})
export class SelectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  DIFFICULT()
  {
    this.navCtrl.push(IntroductionPage);
  }

  BASIC()
  {
    this.navCtrl.push(BandersnatchPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectionPage');
  }

}