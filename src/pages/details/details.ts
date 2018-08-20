
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Service } from '../../app/services/service';
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
  codetribes=[];

 

  constructor(public navCtrl: NavController, public navParams: NavParams, private service:Service) {
this.codetribes=this.service.getcodetribes();

  }

  GetUserInfo(index:number){
    this.service.addDetails(index);
   this.navCtrl.push(HomePage)
  }
 
}




