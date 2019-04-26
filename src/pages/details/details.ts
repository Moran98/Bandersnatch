import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { DetailsProvider } from '../../providers/details/details';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  @ViewChild(Slides) slides : Slides;


  details : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private detailProvider:DetailsProvider) {
  }

  ionViewDidLoad() {
    this.detailProvider.getDetailsInfo().subscribe((data)=>{
      this.details=data.Search;
    });
  }

}
