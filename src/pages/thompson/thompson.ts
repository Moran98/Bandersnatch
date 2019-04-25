import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcceptPage } from '../accept/accept';
import { RefusePage } from '../refuse/refuse';

/**
 * Generated class for the ThompsonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thompson',
  templateUrl: 'thompson.html',
})
export class ThompsonPage {

  score : number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThompsonPage');
  }

  Choice1(){
    this.navCtrl.push(AcceptPage);
    this.score=0;
  }
  Choice2(){
    this.navCtrl.push(RefusePage);
  }

}
