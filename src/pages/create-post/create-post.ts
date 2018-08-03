import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ImagePicker} from '@ionic-native/image-picker';
import {NativeStorage} from "@ionic-native/native-storage";
import {HomePage} from "../home/home";
import { File } from '@ionic-native/file';

/**
 * Generated class for the CreatePostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-create-post',
    templateUrl: 'create-post.html',
})
export class CreatePostPage {
    image = "";
    description = "";
    posts = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, private imagePicker: ImagePicker, public nativeStorage: NativeStorage) {
        this.posts=this.navParams.get('posts');
        if(this.posts==null){
            this.posts=[];
        }
    }

    savePost() {
        let data=[];
        data.push({
            name: "Diyaa Attiya",
            image: this.image,
            likes: 23,
            hashtags: "#hajji #MINA #2018",
            description: this.description,
            date: new Date()
        });
        this.posts=data.concat(this.posts);
        this.nativeStorage.setItem('myitem', {posts: JSON.stringify(this.posts)})
            .then(
                (data) => {
                    this.navCtrl.push(HomePage);
                },
                (error )=> {
                    console.log(error);
                }
            );

    }

    selectImg() {
        this.imagePicker.getPictures({
            'maximumImagesCount': 1
        }).then((results) => {
            for (var i = 0; i < results.length; i++) {
                this.image = results[i].replace('file://', '');
            }
        }, (err) => {
        })
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CreatePostPage');
    }

}
