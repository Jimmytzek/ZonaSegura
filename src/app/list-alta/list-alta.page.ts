import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';

import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { Map, tileLayer, marker, polyline } from "leaflet";
import * as Leaflet from 'leaflet';
import * as L from 'leaflet';
import * as result from '../json/coord';






//---------- iMPORT DE LAS COORDENAS DE LAS COLONIAS ----------
import { coordenadas } from './../json/coord';
import { coordenadasCaribe } from './../json/caribe';
import { coordenadasProte } from './../json/proterritorio';
import { coordenadasSolidaridad } from './../json/solidaridad';
import { coordenadasCentro } from './../json/centro';
import { coordenadasPayo } from './../json/payoobispo';
import { coordenadasbarrioBravo } from './../json/barriobravo';
import { coordenadasFraccReforma } from './../json/reforma';
import { coordenadasAndresQuintanarro } from './../json/andresquintanarro';
import { coordenadasProteAmpliacion1 } from './../json/proterritorioAmpliacion1';
import { coordenadasNuevoProgreso } from './../json/nuevoprogreso';

import { coordenadasMapa } from './../json/DatosProyectoMovil';
import { coordenadasMiraflores } from '../json/miraflores';
import { coordenadasAdolfoLopezMateos } from '../json/adolfoLopezMateos';
import { coordenadasGustavoGutierrez } from '../json/gustavoGutierrez';
import { coordenadasMartinezRoss } from '../json/martinezross';
import { coordenadas5deAbril } from '../json/5deAbril';
import { coordenadasPlutarcoEliasCalles } from '../json/plutarcoEliasCalles';
import { coordenadasFramboyanes } from '../json/framboyanes';
import { coordenadasLagunitas } from '../json/lagunitas';
import { coordenadasdelBosque } from '../json/delBosque';
import { coordenadasForjadores } from '../json/forjadores';
import { coordenadasConstituyentes } from '../json/constituyentes';
import { coordenadasJardines } from '../json/jardines';
import { coordenadasPrimeraLegislatura } from '../json/primeraLegislatura';
import { coordenadasItalia } from '../json/italia';
import { coordenadasCampestre } from '../json/campestre';
import { coordenadasCarranza } from '../json/carranza';
import { coordenadasTaxista } from '../json/taxistas';
import { coordenadasMagisterial } from '../json/magisterial';
import { coordenadas8deOctubre } from '../json/8deOctubre';
import { coordenadasPactoObrero } from '../json/pactoObrero';
import { coordenadas17deOctubre } from '../json/a17deOctubre';
import { coordenadasfranciscoMujica } from '../json/franciscoMujica';

import { ModalPagePage } from "../modal-page/modal-page.page";
import { ModalCaribePage } from "../modal-caribe/modal-caribe.page";
import { ModalAdolfoLopezMateosPage } from "../modal-adolfo-lopez-mateos/modal-adolfo-lopez-mateos.page";
import { ModalPayoObispoPage } from "../modal-payo-obispo/modal-payo-obispo.page";

@Component({
  selector: 'app-list-alta',
  templateUrl: './list-alta.page.html',
  styleUrls: ['./list-alta.page.scss'],
})
export class ListAltaPage implements OnInit {
 
  constructor(public modalController: ModalController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPagePage
    });
     modal.present();
  }
  
  async presentModalCaribe() {
    const modal = await this.modalController.create({
      component: ModalCaribePage
    });
     modal.present();
  }
  

  async presentModalAdolfo() {
    const modal = await this.modalController.create({
      component: ModalAdolfoLopezMateosPage
    });
     modal.present();
  }

  async presentModalPayoObispo() {
    const modal = await this.modalController.create({
      component: ModalPayoObispoPage
    });
     modal.present();
  }


  ngOnInit() {
   
  }
        
  }


