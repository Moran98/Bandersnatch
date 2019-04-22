import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BPage1Page } from '../b-page1/b-page1';

/**
 * Generated class for the BandersnatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bandersnatch',
  templateUrl: 'bandersnatch.html',
})

export class BandersnatchPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    let score : number;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandersnatchPage');
  }

  Choice1(){
    this.navCtrl.push(BPage1Page);
  }

  Choice2(){
    this.navCtrl.push(BPage1Page);
  }
}
