import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { BPage1Page } from '../b-page1/b-page1';

/**
 * Generated class for the BandersnatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bandersnatch',
  templateUrl: 'bandersnatch.html',
})

export class BandersnatchPage {

  


  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl : ToastController) {

    let score : number;


//    let toast = this.toastCtrl.create({

  //    message: 'The game has started.',
    //  duration : 3000,
      //position : 'bottom'

   // });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BandersnatchPage');

  }

  Choice1(){
    this.navCtrl.push(BPage1Page);
  }
}
