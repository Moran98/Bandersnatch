import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ending2Page } from '../ending2/ending2';
import { ShoutPage } from '../shout/shout';

/**
 * Generated class for the DevelopmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-development',
  templateUrl: 'development.html',
})
export class DevelopmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevelopmentPage');
  }

  Choice1(){
    this.navCtrl.push(Ending2Page);
  }
  Choice2(){
    this.navCtrl.push(ShoutPage);
  }

}
