import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BandersnatchPage } from '../bandersnatch/bandersnatch';
import { ThompsonPage } from '../thompson/thompson';
import { Now2Page } from '../now2/now2';

/**
 * Generated class for the BPage1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-b-page1',
  templateUrl: 'b-page1.html',
})
export class BPage1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BPage1Page');
  }

  Choice1(){
    this.navCtrl.push(ThompsonPage);
  }


  Choice2(){
    this.navCtrl.push(Now2Page);
  }
}
