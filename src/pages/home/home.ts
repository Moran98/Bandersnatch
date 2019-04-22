import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { IntroductionPage } from '../introduction/introduction';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl : AlertController) {}

  Enter()
  {
    this.navCtrl.push(IntroductionPage)
    let alert = this.alertCtrl.create({
      title: 'Welcome.',
      subTitle: 'You are now shown the following game instructions.',
      buttons: ['OK']
    });
    alert.present();
  }

}