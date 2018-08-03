import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {AboutPage} from "../about/about";
import {CreatePostPage} from "../create-post/create-post";
import {NativeStorage} from "@ionic-native/native-storage";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    posts = [];

    constructor( public platform: Platform, public navCtrl: NavController, private  nativeStorage: NativeStorage) {
        platform.ready().then(() => {
           this.nativeStorage.getItem('myitem')
               .then(
                   (data) => {
                       data=data['posts'];
                       this.posts=JSON.parse(data);
                   },
                   (error) => {
                       console.log(error);
                   }
               );
       });


    }

    addPost() {
        this.navCtrl.push(CreatePostPage,{"posts":this.posts});
    }

    gotoChat() {
        this.navCtrl.push(AboutPage);
    }
}
