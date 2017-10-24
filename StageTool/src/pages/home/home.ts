import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactmomentPage } from '../contactmoment/contactmoment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  goToContactmoment(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ContactmomentPage);
  }
}
