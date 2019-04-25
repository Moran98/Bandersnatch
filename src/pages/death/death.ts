import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MorningPage } from '../morning/morning';
import { Therapy3Page } from '../therapy3/therapy3';

/**
 * Generated class for the DeathPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-death',
  templateUrl: 'death.html',
})
export class DeathPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeathPage');
  }

  Choice1()
  {
     this.navCtrl.push(Therapy3Page);
  }

  Choice2()
  {
    this.navCtrl.push(MorningPage);
  }

}
