import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TherapynoPageModule } from '../therapyno/therapyno.module';
import { TherapynoPage } from '../therapyno/therapyno';
import { TherapyyesPage } from '../therapyyes/therapyyes';

/**
 * Generated class for the TherapyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-therapy',
  templateUrl: 'therapy.html',
})
export class TherapyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TherapyPage');
  }
  Choice1(){
    this.navCtrl.push(TherapyyesPage);
  }
  Choice2(){
    this.navCtrl.push(TherapynoPage);
  }
}
