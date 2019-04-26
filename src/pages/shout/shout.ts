import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ColinPage } from '../colin/colin';
import { ResistancePage } from '../resistance/resistance';
import { HynesPage } from '../hynes/hynes';

/**
 * Generated class for the ShoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shout',
  templateUrl: 'shout.html',
})
export class ShoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoutPage');
  }

  Choice1(){
    this.navCtrl.push(HynesPage);
  }
  Choice2(){
    this.navCtrl.push(ColinPage);
  }


}
