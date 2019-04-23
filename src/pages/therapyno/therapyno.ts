import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DevelopmentPage } from '../development/development';

/**
 * Generated class for the TherapynoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-therapyno',
  templateUrl: 'therapyno.html',
})
export class TherapynoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TherapynoPage');
  }

  Choice1(){
    this.navCtrl.push(DevelopmentPage);
  }
  Choice2(){
    this.navCtrl.push(DevelopmentPage);
  }

}
