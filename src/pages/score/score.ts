import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {

  finalScores : number = 0;

  constructor(private storage : Storage , public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.storage.get('finalScores').then((val1)=>{
      this.finalScores = val1;
    });
  }

}
