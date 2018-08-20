import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {
 
  }

  userFG: FormGroup;
  constructor(public navCtrl: NavController,private fb:FormBuilder) {
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

   Save() {
    console.log(this.user);
    this,this.navCtrl.push(ProfilePage)
  }

  formSubmit({value,valid}:{value:User,valid:boolean}) {
    console.log(value);
    console.log(valid);
   
  }

}

export interface User{
  username:string;
  email:string;
  password:string;
 
}

