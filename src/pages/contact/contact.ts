import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as $ from "jquery";
declare const google;
@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {
    items = [
        {
            imageUrl: 'assets/imgs/ian-avatar.png',
            title: 'Salem Ahmed',
            place: '5.1 KM Away',
            date: '05/06/2016'
        },
        {
            imageUrl: 'assets/imgs/ian-avatar.png',
            title: 'Salem Ahmed',
            place: '5.1 KM Away',
            date: '15/03/2016'
        },
        {
            imageUrl: 'assets/imgs/ian-avatar.png',
            title: 'Salem Ahmed',
            place: '5.1 KM Away',
            date: '05/12/2015'
        },
    ];
    map: any;
    geocoder;
    marker: any = null;
    coordinates: string;
    location: string;
    @ViewChild('map') mapElement: ElementRef;
    constructor(public navCtrl: NavController) {

    }
    ionViewDidLoad() {
        this.loadMap();
    }
    setMarker(latlng) {
        if (this.marker == null) {
            this.marker = new google.maps.Marker({
                position: latlng,
                draggable: true
            });
            this.marker.setMap(this.map);
        } else {
            this.marker.setPosition(latlng);
        }
        this.setLocation();
    }

    loadMap() {
        this.geocoder = new google.maps.Geocoder;
        let riyadh = {lat: 24.7062405, lng: 46.6802174};
        let myCenter = new google.maps.LatLng(riyadh.lat, riyadh.lng);
        let mapOptions = {center: myCenter, zoom: 10, disableDefaultUI: true};
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.setMarker(myCenter);
        google.maps.event.addListener(this.marker, 'dragend', (event) => {
            this.setLocation();
        });
        google.maps.event.addListener(this.map, 'click', (event) => {
            this.setMarker(event.latLng);
        });
    }

    setLocation() {
        this.coordinates = `${this.marker.getPosition().lat()},${this.marker.getPosition().lng()}`;
        this.geocodeLatLng(this.marker.getPosition().lat(), this.marker.getPosition().lng());
    }

    geocodeLatLng(lat: number, lng: number) {
        var latlng = {lat: lat, lng: lng};
        this.geocoder.geocode({'location': latlng}, (results, status) => {
            if (status === 'OK') {
                if (results[0]) {
                    this.location = results[0]['formatted_address'].toString();
                }
            }
        });
    }

    ngAfterViewInit() {
        $(document).ready(function () {
            $(".sub-tabs li").click(function () {
                $(".sub-tabs li").removeClass('active');
                $(this).addClass('active');
            })
        });
    }
}
