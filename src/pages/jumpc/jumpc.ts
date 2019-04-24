import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HynesPage } from '../hynes/hynes';

/**
 * Generated class for the JumpcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jumpc',
  templateUrl: 'jumpc.html',
})
export class JumpcPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JumpcPage');
  }

  Choice1()
  {
    this.navCtrl.push(HynesPage);
  }

}
