import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chop',
  templateUrl: 'chop.html',
})
export class ChopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChopPage');
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
