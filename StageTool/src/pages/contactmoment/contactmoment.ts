import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ContactmomentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactmoment',
  templateUrl: 'contactmoment.html',
})
export class ContactmomentPage {
  invoer: FirebaseListObservable<any>;
  data = { cvorm: " ", date: " ", text: " "};
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase, public toastCtrl: ToastController) {
    this.invoer = af.list('/invoer');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormulierPage');
  }




  SaveData() {
    this.invoer.push({
      cvorm: this.data.cvorm,
      date: this.data.cvorm,
      text: this.data.text


    })
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Contact moment opgeslagen',
      duration: 3000,
      position: 'top'
    });
     toast.present();
  }
}
