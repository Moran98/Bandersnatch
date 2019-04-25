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

  private user = {
    name : ' '
  };

  private data : any[];

  constructor(public navCtrl: NavController, public alertCtrl : AlertController, private storage : Storage ) {}

  Enter()
  {

    //User must enter in a value in input box or else cannot continue
    if(this.uname ==" "){
      this.navCtrl.push(HomePage);
      let alert = this.alertCtrl.create({
        title: "Warning",
        subTitle:"Please enter an Alias before starting the game.",
        buttons:["OK"]
      });
      alert.present();
    }

    //Saving username to local storage
    this.storage.set(this.key, this.uname); 
    this.storage.get(this.key).then((val)=>{
    console.log("Your Username is ", val);
    });

    //Alert to welcome the user

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