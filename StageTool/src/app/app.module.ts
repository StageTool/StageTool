import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CartPage } from '../pages/cart/cart';
import { CloudPage } from '../pages/cloud/cloud';
import { ContactmomentPage } from '../pages/contactmoment/contactmoment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const firebaseConfig = {
  apiKey: "AIzaSyCn8m646WRNo-M-nNEs8NJnMuHJ1kfVQWg",
  authDomain: "stagetool-d0c1d.firebaseapp.com",
  databaseURL: "https://stagetool-d0c1d.firebaseio.com",
  projectId: "stagetool-d0c1d",
  storageBucket: "stagetool-d0c1d.appspot.com",
  messagingSenderId: "11254544018"

  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CartPage,
    CloudPage,
    ContactmomentPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CartPage,
    CloudPage,
    ContactmomentPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
