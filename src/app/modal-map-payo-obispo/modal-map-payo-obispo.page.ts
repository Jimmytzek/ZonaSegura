import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VentanaComponent } from "../ventana/ventana.component";
import * as firebase from 'firebase';
import { firebaseConfig, snapshotToArray } from 'src/environments/environment';
import { NavController, AlertController } from '@ionic/angular';
import { DatosService } from './../service/datos.service';
import { Map, tileLayer, marker, polyline } from "leaflet";
import { ModalPagePage } from "../modal-page/modal-page.page";
import * as L from 'leaflet';


import { coordenadasPayo } from '../json/payoobispo';


@Component({
  selector: 'app-modal-map-payo-obispo',
  templateUrl: './modal-map-payo-obispo.page.html',
  styleUrls: ['./modal-map-payo-obispo.page.scss'],
})
export class ModalMapPayoObispoPage implements OnInit {
  map: Map;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    
  }

  close (){
    this.modalController.dismiss();
  }

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map('mapId').setView([18.5271504,-88.3233049], 15);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '',
    }).addTo(this.map);


    

    // marker([18.5428069,-88.3022388]).addTo(this.map)
    // .bindPopup('Ionic 4 <br> Leaflet.')
    // .openPopup();
  
  
  }
  public disabled = false;

  public payoObispo(){
    var polygonCaribe = L.geoJSON(coordenadasPayo.payoObispo,{
      "color": "#EA391D",
      "weight": 5,
      "opacity": 0.70
    }).addTo(this.map);
    polygonCaribe.bindPopup("<h4><b>Colonia Payo Obispo</b></h4>");
     // Añadir polígono al arreglo de polígonos
     //this.poligonos.push(polygonCaribe);
     this.disabled = !this.disabled; 
    }

}
