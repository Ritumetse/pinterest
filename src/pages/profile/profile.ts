import { DetailservicesProvider } from './../../providers/detailservices/detailservices';

import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user = {
   

  }
  details=[];

  userFG: FormGroup;

  constructor(public navCtrl: NavController,private fb:FormBuilder , private auth:DetailservicesProvider) {
    this.userFG = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
     
    })
    this.userFG = this.fb.group({
      username:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.maxLength(10)]],
     
    })
     }
     submit() {
      console.log(this.user);
     
    }
  
    formSubmit({value,valid}:{value:User,valid:boolean}) {
      console.log(value);
      console.log(valid);

  
     
    }
    Edit():void{
      this.navCtrl.push(DetailsPage)
    }
    Clear():void{
  
    }

  }
  export interface User{
    username:string;
    email:string;
    password:string;
    
  }

  
 

