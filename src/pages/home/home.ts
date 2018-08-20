import { DetailsPage } from './../details/details';
import { ProfilePage } from './../profile/profile';
import { Service } from './../../app/services/service';

import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  Details=[];


  constructor(public navCtrl: NavController, public navParams: NavParams,private service:Service) {
this.Details=this.service.getDetails();
  }
  logout(){
    this.navCtrl.push(LoginPage)
  }

  ok(){
    this.service.Details=[];
    this.navCtrl.push(DetailsPage);
  }

}
