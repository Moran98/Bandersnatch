import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TherapyPage } from '../therapy/therapy';

/**
 * Generated class for the RefusePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-refuse',
  templateUrl: 'refuse.html',
})
export class RefusePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RefusePage');
  }

  Choice1(){
    this.navCtrl.push(TherapyPage);
  }

}
