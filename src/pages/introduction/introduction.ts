import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectionPage } from '../selection/selection';

/**
 * Generated class for the IntroductionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-introduction',
  templateUrl: 'introduction.html',
})
export class IntroductionPage {

  username : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    let username = this.navParams.get('uname');

  }

  GotIt()
  {
    this.navCtrl.push(SelectionPage);
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('uname'));
  }
}