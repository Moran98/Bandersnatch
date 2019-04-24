import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResistancePage } from '../resistance/resistance';

/**
 * Generated class for the HynesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hynes',
  templateUrl: 'hynes.html',
})
export class HynesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HynesPage');
  }

  Choice1()
  {
    this.navCtrl.push(ResistancePage);
  }

}
