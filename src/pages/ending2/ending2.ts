import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BandersnatchPage } from '../bandersnatch/bandersnatch';
import { SelectionPage } from '../selection/selection';

/**
 * Generated class for the Ending2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ending2',
  templateUrl: 'ending2.html',
})
export class Ending2Page {

  score : number = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ending2Page');
  }

  Choice1(){
    this.navCtrl.push(SelectionPage);
  }

  Choice2()
  {
    this.navCtrl.push(BandersnatchPage);
  }

}
