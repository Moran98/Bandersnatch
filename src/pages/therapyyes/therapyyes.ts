import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DevelopmentPage } from '../development/development';
import { Development2Page } from '../development2/development2';

/**
 * Generated class for the TherapyyesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-therapyyes',
  templateUrl: 'therapyyes.html',
})
export class TherapyyesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TherapyyesPage');
  }

  Choice1(){
    this.navCtrl.push(DevelopmentPage);
  }

  Choice2(){
    this.navCtrl.push(Development2Page);
  }
}
