import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ending2Page } from '../ending2/ending2';
import { DevelopmentPage } from '../development/development';
import { ShoutPage } from '../shout/shout';

/**
 * Generated class for the Development2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-development2',
  templateUrl: 'development2.html',
})
export class Development2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Development2Page');
  }

  Choice1(){
    this.navCtrl.push(Ending2Page);
  }
  Choice2(){
    this.navCtrl.push(ShoutPage);
  }


}
