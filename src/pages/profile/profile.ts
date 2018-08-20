
import { HomePage } from './../home/home';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { LoginPage } from './../login/login';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

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
  public photos : any;
  public base64Image : string;
  isOn:boolean;
status:string;

  constructor(public navCtrl: NavController,private fb:FormBuilder ,private camera:Camera,private alertCtrl:AlertController) {}
  ngOnInit() {
    this.photos = [];
  }
  takePhoto(){
    const options : CameraOptions = {
      quality: 100, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation:true,
      saveToPhotoAlbum:true
    }


    this.camera.getPicture(options) .then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.photos.push(this.base64Image);
      this.photos.reverse();
    }, (err) => {
      console.log(err);
    });
}

    Edit(){
      this.navCtrl.push(RegisterPage)
    }
    get(){
      this.navCtrl.push(DetailsPage)
    }

  }
