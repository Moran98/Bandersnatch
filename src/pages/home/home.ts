import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { IntroductionPage } from '../introduction/introduction';
import { Storage } from '@ionic/storage';
import { dateValueRange } from 'ionic-angular/umd/util/datetime-util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  uname : string;
  key : string = 'user';
  username;

  private user = {
    name : ' '
  };

  private data : any[];

  constructor(public navCtrl: NavController, public alertCtrl : AlertController, public storage : Storage) {}

  Enter()
  {
    let data = {
      uname : this.username,
    };

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
    //this.storage.set(this.key, this.uname); 
    this.storage.get('save').then((data)=>{
      console.log(data);
      });
    

    //Alert to welcome the user
    this.navCtrl.push(IntroductionPage, data);
    let alert = this.alertCtrl.create({
    title: 'Welcome.',
    // From research apparently data binding isnt supposed to work in alerts?
    // Tried multiple options but couldnt get to work
    //title: 'Welcome {{username}}',
    //title: 'Welcome {{this.username}}',
    //title: 'Welcome '+console.log(this.username),

    subTitle: 'You are now shown the following game instructions.',
    buttons: ['OK']
    });
    alert.present();
  }
}