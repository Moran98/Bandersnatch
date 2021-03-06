import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Therapy2Page } from '../therapy2/therapy2';

/**
 * Generated class for the ToyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toy',
  templateUrl: 'toy.html',
})
export class ToyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToyPage');
  }

  Choice1()
  {
    this.navCtrl.push(Therapy2Page);
  }

}
