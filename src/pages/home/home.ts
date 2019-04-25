import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { IntroductionPage } from '../introduction/introduction';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  uname : string;
  key : string = 'user';

  constructor(public navCtrl: NavController, public alertCtrl : AlertController, private storage : Storage ) {}

  Enter()
  {
    this.storage.set(this.key, this.uname);
    this.storage.get(this.key).then((val)=>{
    console.log("Your Username is ", val);
    });
    this.navCtrl.push(IntroductionPage)
    let alert = this.alertCtrl.create({
    title: 'Welcome',
    //title: 'Welcome {{username}}',
    subTitle: 'You are now shown the following game instructions.',
    buttons: ['OK']
    });
    alert.present();
  }
}