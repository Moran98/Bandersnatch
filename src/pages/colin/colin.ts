import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ending2Page } from '../ending2/ending2';
import { LsdPage } from '../lsd/lsd';
import { LsdnoPage } from '../lsdno/lsdno';

/**
 * Generated class for the ColinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-colin',
  templateUrl: 'colin.html',
})
export class ColinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColinPage');
  }

  Choice1(){
    this.navCtrl.push(LsdPage);
  }

  Choice2(){
    this.navCtrl.push(LsdnoPage);
  }


}
