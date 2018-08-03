import {Component, ViewChild} from '@angular/core';
import {NavController,Content} from 'ionic-angular';
import {FormBuilder, FormControl} from "@angular/forms";
@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})

export class AboutPage {

    toUser = {
        _id: '534b8e5aaa5e7afc1b23e69b',
        pic: 'assets/img/avatar/ian-avatar.png',
        username: 'Venkman',
    };

    user = {
        _id: '534b8fb2aa5e7afc1b23e69c',
        pic: 'assets/img/avatar/marty-avatar.png',
        username: 'Marty',
    };

    doneLoading = false;

    messages = [
        {
            _id: 1,
            date: "09:00 AM",

            userId: this.user._id,
            username: this.user.username,
            pic: this.user.pic,
            text: 'OH CRAP!!'
        },
        {
            _id: 2,
            date: "09:00 AM",

            userId: this.toUser._id,
            username: this.toUser.username,
            pic: this.toUser.pic,
            text: 'what??'
        },
        {
            _id: 3,
            date: "09:00 AM",

            userId: this.toUser._id,
            username: this.toUser.username,
            pic: this.toUser.pic,
            text: 'Pretty long message with lots of content'
        },
        {
            _id: 4,
            date: "09:00 AM",

            userId: this.user._id,
            username: this.user.username,
            pic: this.user.pic,
            text: 'Pretty long message with even way more of lots and lots of content'
        },
        {
            _id: 5,
            date: "09:00 AM",
            userId: this.user._id,
            username: this.user.username,
            pic: this.user.pic,
            text: 'what??'
        },
        {
            _id: 6,
            date: "09:00 AM",

            userId: this.toUser._id,
            username: this.toUser.username,
            pic: this.toUser.pic,
            text: 'yes!'
        }
    ];
    @ViewChild(Content) content: Content;

    public messageForm: any;
    chatBox: any;

    constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
        this.messageForm = formBuilder.group({
            message: new FormControl('')
        });
        this.chatBox = '';
    }

    send(message) {
        if (message && message !== '') {
            // this.messageService.sendMessage(chatId, message);

            const messageData =
                {
                    toId: this.toUser._id,
                    _id: 6,
                    date: "09:00 AM",
                    userId: this.user._id,
                    username: this.toUser.username,
                    pic: this.toUser.pic,
                    text: message
                };

            this.messages.push(messageData);
            this.scrollToBottom();

            setTimeout(() => {
                const replyData =
                    {
                        toId: this.toUser._id,
                        _id: 6,
                        date:"09:00AM",
                        userId: this.toUser._id,
                        username: this.toUser.username,
                        pic: this.toUser.pic,
                        text: 'Just a quick reply'
                    };
                this.messages.push(replyData);
                this.scrollToBottom();
            }, 1000);
        }
        this.chatBox = '';
    }

    scrollToBottom() {
        setTimeout(() => {
            this.content.scrollToBottom();
        }, 100);
    }

}
