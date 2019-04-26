import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectionPage } from '../selection/selection';
import { BandersnatchPage } from '../bandersnatch/bandersnatch';

/**
 * Generated class for the BuryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bury',
  templateUrl: 'bury.html',
})
export class BuryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuryPage');
  }


  Choice1()
  {
    this.navCtrl.push(SelectionPage);
  }
  Choice2()
  {
    this.navCtrl.push(BandersnatchPage);
  }

}
