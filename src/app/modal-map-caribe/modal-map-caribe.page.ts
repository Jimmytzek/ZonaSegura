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

import { coordenadasCaribe } from './../json/caribe';
import { coordenadasProte } from '../json/proterritorio';

@Component({
  selector: 'app-modal-map-caribe',
  templateUrl: './modal-map-caribe.page.html',
  styleUrls: ['./modal-map-caribe.page.scss'],
})
export class ModalMapCaribePage implements OnInit {
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
    this.map = new Map('mapId').setView([18.5410222,-88.304088], 15);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '',
    }).addTo(this.map);
  }

    
  public disabled = false;

  public caribe(){
    var polygonCaribe = L.geoJSON(coordenadasCaribe.caribe,{
      "color": "#F30505",
      "weight": 5,
      "opacity": 0.70
    }).addTo(this.map);
    polygonCaribe.bindPopup("<h4><b>Colonia Caribe</b></h4>");
     // Añadir polígono al arreglo de polígonos
    
     this.disabled = !this.disabled; 
    }


}
