import { RegisterPage } from './../pages/register/register';

import { DetailsPage } from './../pages/details/details';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { Service } from './services/service';
import { Camera } from '@ionic-native/camera';







@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage,
    DetailsPage,
    RegisterPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage,
    DetailsPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Service,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
   
  ]
})
export class AppModule {}
