import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ending2Page } from '../ending2/ending2';
import { ShoutPage } from '../shout/shout';
import { Ending4Page } from '../ending4/ending4';

/**
 * Generated class for the DeadlinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deadline',
  templateUrl: 'deadline.html',
})
export class DeadlinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeadlinePage');
  }

  Choice1(){
    this.navCtrl.push(Ending4Page);
  }
  Choice2(){
    this.navCtrl.push(ShoutPage);
  }

}
