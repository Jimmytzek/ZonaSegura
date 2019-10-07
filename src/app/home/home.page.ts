import { AuthService } from './../servicios/auth.service';
import { DatosService } from './../service/datos.service';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google: any;
import { Map, tileLayer, marker } from "leaflet";
import * as L from 'leaflet';
import * as lr from 'leaflet-routing-machine';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';

import { SMS } from '@ionic-native/sms/ngx';
import {CallNumber} from '@ionic-native/call-number/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  @ViewChild('searchbar', { static: false, read: ElementRef }) searchbar: ElementRef;
  address: HTMLInputElement = null;
  routingControl: any;
  currentPos: any;

  map: Map;
  marker: any;
  latLong = [];

  

  constructor(private geolocation: Geolocation,private storage: Storage, private toastCtrl:ToastController,
     private sms: SMS, private call : CallNumber,private global:AuthService) {
  }

  ngOnInit(){
    this.storage.get('dato').then((val) => {
      this.global.variable = val;
    });
  }

  initAutocomplete() {
    this.address = this.searchbar.nativeElement.querySelector('.searchbar-input');
    this.createAutocomplete(this.address).subscribe((loc) => {
      console.log('Location', loc)
      // this.setMarker([]);
      let dest = { lat: loc.lat(), lng: loc.lng() }
      this.calculateRoute(this.currentPos, dest);
    })
  }

  createAutocomplete(element: HTMLInputElement): Observable<any> {
    const autocomplete = new google.maps.places.Autocomplete(element, {
      componentRestrictions: { country: 'mx' },
      bounds: new google.maps.LatLngBounds({ lat: 18.487490, lng: -88.356600 }, { lat: 18.565608, lng: -88.246973 }),
      strictBounds: false
    });
    return new Observable((sub: any) => {
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          sub.error({
            message: 'error'
          });
        } else {
          console.log(place.geometry.location.lat());
          console.log(place.geometry.location.lng())
          sub.next(place.geometry.location);
        }
      });
    });
  }

  calculateRoute(orig, dest){
    this.map.removeLayer(this.marker);
    if(this.routingControl)
      this.map.removeControl(this.routingControl);
    this.routingControl = L.Routing.control({
      waypoints: [
        L.latLng(orig.lat, orig.lng),
        L.latLng(dest.lat, dest.lng)
      ],
      routeWhileDragging: true
    }).addTo(this.map);
  }

  ionViewDidEnter() {
    // this.showMap();
    // this.initAutocomplete();
    // let x = lr;
    // this.getPositions();
  }

  showMap() {
    this.map = new Map('myMap').setView([18.5070983, -88.3081265], 13)
    this.map.zoomControl.setPosition('bottomright');
    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(this.map);
  }

  getPositions() {
    this.geolocation.getCurrentPosition({
      enableHighAccuracy: true
    }).then((res) => {
      return this.latLong = [
        res.coords.latitude,
        res.coords.longitude
      ]
    }).then((latLong) => {
      this.currentPos = { lat: latLong[0], lng: latLong[1] };
      this.setMarker(latLong);
    });

  }

  setMarker(latlng) {
    this.marker = marker(latlng, { draggable:true });
    this.marker.addTo(this.map)
      .bindPopup('Hey, aqui estoy!').openPopup();
    this.marker.on('dragend', (markerDrag)=>{
      this.currentPos = { lat: markerDrag.target._latlng.lat, lng: markerDrag.target._latlng.lng };
      console.log(markerDrag.target._latlng)
    });
  }

  sendSMS(){
    for(let i = 0; i< this.global.variable.length;i++){
      this.sms.send(this.global.variable[i]._objectInstance.phoneNumbers[0].value,'help');
      console.log('This is i',i);
    }
    
    this.presentToast();
    this.callN();
  }

  async presentToast(){
        const toast = await this.toastCtrl.create({
          message:'¡Mensage enviado!',
          duration: 2000,
          position: 'top',
        });
        toast.present();
  }

  callN(){
    this.call.callNumber('911',true);
  }

}
