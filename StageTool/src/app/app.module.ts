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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const firebaseConfig = {
    apiKey: "AIzaSyBCN_t6cCbuPoxQjvQ4V-4hsK257JxqTyo",
    authDomain: "stagetool-3fa2f.firebaseapp.com",
    databaseURL: "https://stagetool-3fa2f.firebaseio.com",
    projectId: "stagetool-3fa2f",
    storageBucket: "",
    messagingSenderId: "1051083551226"
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
