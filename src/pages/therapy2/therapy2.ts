import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TherapyyesPage } from '../therapyyes/therapyyes';
import { TherapynoPage } from '../therapyno/therapyno';
import { DeathPage } from '../death/death';

/**
 * Generated class for the Therapy2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-therapy2',
  templateUrl: 'therapy2.html',
})
export class Therapy2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Therapy2Page');
  }

  Choice1(){
    this.navCtrl.push(DeathPage);
  }
  Choice2(){
    this.navCtrl.push(DeathPage);
  }

}
