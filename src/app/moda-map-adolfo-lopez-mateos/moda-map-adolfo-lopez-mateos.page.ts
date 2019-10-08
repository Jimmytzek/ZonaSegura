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

import { coordenadasAdolfoLopezMateos } from "../json/adolfoLopezMateos";

@Component({
  selector: 'app-moda-map-adolfo-lopez-mateos',
  templateUrl: './moda-map-adolfo-lopez-mateos.page.html',
  styleUrls: ['./moda-map-adolfo-lopez-mateos.page.scss'],
})
export class ModaMapAdolfoLopezMateosPage implements OnInit {

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
    this.map = new Map('mapId').setView([18.5121976,-88.286216], 14);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '',
    }).addTo(this.map);
  }

  public disabled = false;

  public proterritorio(){
    var polygonCaribe = L.geoJSON(coordenadasAdolfoLopezMateos.AdolfoLopezMateos,{
      "color": "#EA391D",
      "weight": 5,
      "opacity": 0.70
    }).addTo(this.map);
    polygonCaribe.bindPopup("<h4><b>Colonia Adolfo Lopez Mateos</b></h4>");
     // Añadir polígono al arreglo de polígonos
     //this.poligonos.push(polygonCaribe);
     this.disabled = !this.disabled; 
    }

}
