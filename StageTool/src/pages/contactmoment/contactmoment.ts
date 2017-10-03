import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
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
message: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, af:AngularFireDatabase, public alertCtrl:AlertController) {
    this.message = af.list("/message");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactmomentPage');
  }
  opslaan(){
    this.alertCtrl.create({
      buttons: [
        ,
        {
          text: "opslaan",
          handler: data => {
            this.message.push({
              title: data.title
            });
          }
        }
      ]
    })
  }

}
