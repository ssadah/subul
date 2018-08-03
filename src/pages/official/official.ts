import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OfficialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-official',
  templateUrl: 'official.html',
})
export class OfficialPage {
    items = [
        {
            imageUrl: 'assets/imgs/hajjmin.png',
            authorImage:'assets/imgs/mohajj.png',
            title: 'Ministry of Hajj',
            description: 'As per the directives and the ongoing follow-up of the Custodian of the Two Holy Mosques King Salman bin Abdulaziz, Crown Prince and Deputy Premier, Minister of Interior, and President of the Su​preme Hajj Committee as well as the Deputy Crown Prince',
            date: '05/06/2016'
        },
        {
            imageUrl: 'assets/imgs/hajjmin.png',
            authorImage:'assets/imgs/mohajj.png',
            title: 'Ministry of Hajj',
            description: 'As per the directives and the ongoing follow-up of the Custodian of the Two Holy Mosques King Salman bin Abdulaziz, Crown Prince and Deputy Premier, Minister of Interior, and President of the Su​preme Hajj Committee as well as the Deputy Crown Prince',
            date: '05/06/2016'
        },
        {
            imageUrl: 'assets/imgs/hajjmin.png',
            authorImage:'assets/imgs/mohajj.png',
            title: 'Ministry of Hajj',
            description: 'As per the directives and the ongoing follow-up of the Custodian of the Two Holy Mosques King Salman bin Abdulaziz, Crown Prince and Deputy Premier, Minister of Interior, and President of the Su​preme Hajj Committee as well as the Deputy Crown Prince',
            date: '05/06/2016'
        }
    ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
