import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JumpcPage } from '../jumpc/jumpc';
import { JumpsPage } from '../jumps/jumps';

/**
 * Generated class for the LsdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lsd',
  templateUrl: 'lsd.html',
})
export class LsdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LsdPage');
  }

  Choice1(){
    this.navCtrl.push(JumpcPage);
  }

  Choice2(){
    this.navCtrl.push(JumpsPage);
  }

}
