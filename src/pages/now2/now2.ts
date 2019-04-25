import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BandersnatchPage } from '../bandersnatch/bandersnatch';
import { AcceptPage } from '../accept/accept';
import { RefusePage } from '../refuse/refuse';

/**
 * Generated class for the Now2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-now2',
  templateUrl: 'now2.html',
})
export class Now2Page {

  score : number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Now2Page');
  }

  Choice1(){
    this.navCtrl.push(AcceptPage);
    this.score=0;
  }
  Choice2(){
    this.navCtrl.push(RefusePage);
  }

}
