import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BandersnatchPage } from '../bandersnatch/bandersnatch';
import { IntroductionPage } from '../introduction/introduction';
import { SelectionPage } from '../selection/selection';
import { Clipboard } from '@ionic-native/clipboard';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //this.clipboard.copy('G00356519@gmit.ie');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  Choice1(){
    this.navCtrl.push(SelectionPage);
  }


  Choice2(){
    this.navCtrl.push(BandersnatchPage);
  }

}
