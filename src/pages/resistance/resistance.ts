import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BandersnatchPage } from '../bandersnatch/bandersnatch';
import { DeadlinePage } from '../deadline/deadline';
import { Ending5Page } from '../ending5/ending5';

/**
 * Generated class for the ResistancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resistance',
  templateUrl: 'resistance.html',
})
export class ResistancePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResistancePage');
  }

  Choice1()
  {
    this.navCtrl.push(Ending5Page);
  }

  Choice2()
  {
    this.navCtrl.push(DeadlinePage);
  }

}
