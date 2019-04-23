import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Vibration } from '@ionic-native/vibration/ngx'

/**
 * Generated class for the IgnorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ignore',
  templateUrl: 'ignore.html',
})
export class IgnorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //, private vibration : Vibration
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad IgnorePage');
    //this.vibration.vibrate(1000);
  }

}
