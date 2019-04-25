import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BandersnatchPage } from '../bandersnatch/bandersnatch';
import { SelectionPage } from '../selection/selection';
import { Vibration} from '@ionic-native/vibration';

/**
 * Generated class for the AcceptPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accept',
  templateUrl: 'accept.html',
})
export class AcceptPage {

  score : number = 0;

  constructor(public navCtrl: NavController) {
    //Plugin stops app from working
    //private vibration : Vibration
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceptPage');
  }

  Choice1(){
    this.navCtrl.push(SelectionPage);
  }

  Choice2()
  {
    //Vibrates the phone using Cordova Plug-in for (1000ms)- (1 second)
   // this.vibration.vibrate(1000);
    this.navCtrl.push(BandersnatchPage);
  }

}
