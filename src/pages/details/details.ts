import { AuthService } from './../../providers/auth-service/auth-service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

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
users={

}
public form  : FormGroup
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:AuthService ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
}






