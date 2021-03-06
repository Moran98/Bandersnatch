import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BandersnatchPage } from '../bandersnatch/bandersnatch';
import { DetailsPage } from '../details/details';
import { AboutPage } from '../about/about';

/**
 * Generated class for the SelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selection',
  templateUrl: 'selection.html',
})
export class SelectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectionPage');
  }

  Choice1()
  {
    this.navCtrl.push(BandersnatchPage);
  }

  Choice2()
  {
    this.navCtrl.push(DetailsPage);
  }

  Choice3()
  {
    this.navCtrl.push(AboutPage);
  }

}