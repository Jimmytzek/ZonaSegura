import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VentanaComponent } from "../ventana/ventana.component";

import * as firebase from 'firebase';
import { firebaseConfig, snapshotToArray } from 'src/environments/environment';
import { NavController, AlertController } from '@ionic/angular';
import { DatosService } from './../service/datos.service';

import { Map, tileLayer, marker, polyline } from "leaflet";

import { ListAltaPage } from "../../app/list-alta/list-alta.page";
import { ModalMapCaribePage } from '../modal-map-caribe/modal-map-caribe.page';
// import { ModalProterritorioPage } from "../modal-proterritorio/modal-proterritorio.page";
// import { ModalMapAdolfoLopezMateosPage } from "../modal-map-adolfo-lopez-mateos/modal-map-adolfo-lopez-mateos.page";

import { ModalMapPayoObispoPage } from "../modal-map-payo-obispo/modal-map-payo-obispo.page";

@Component({
  selector: 'app-modal-payo-obispo',
  templateUrl: './modal-payo-obispo.page.html',
  styleUrls: ['./modal-payo-obispo.page.scss'],
})
export class ModalPayoObispoPage implements OnInit {

  map: Map;
  marker: any;
  latLong = [];
  total = [];
  a = 1;
  array = [2,4,6,3,8];

  Data = [];
  ref = firebase.database().ref('Data/')

  myDate = new Date();

  almacenaMientoCaribe = [];
  almacenaMientoProterritorio = [];
  almacenamientoSolidaridad = [];
  almacenamientoAdolfo = [];
  almacenamientoCentro = [];


  almacenamientoRankingColonia = [];

  incidentesCaribe = []; roboCA = 0;
  incidenteProte1 = [];  otrosActosRelacionadosP_Prote = 0;
  incidenteProte2 = [];  tentativaDeRobo_prote = 0;
  incidenteProte3 = [];  abusoDeConfianza_prote = 0;
  incidenteProte4 = [];  roboVehiculoPartiSinViolencia_prote = 0;
  incidenteProte5 = [];  roboEscuelaSinViolencia_prote = 0;
  incidenteProte6 = []; roboNegocioSinViolencia_prote = 0;
  incidenteProte7 = [];  roboTrausanteSinviolencia_prote = 0;
  incidenteProte8 = [];  cristalazoVehiculo_prote = 0;
  incidenteProte9 = [];  roboCasaHabitacionSinViolencia = 0;
  incidenteProte10 = [];  allamientoMorada_prote = 0;
  incidenteProte11 = [];  roboNegocioSinViolencia = 0;




  resultIncidentesCaribe = [];


 //VARIABLES DE ALMACENAMIENTO DE TOTAL DE INCIDENTES

  Caribe = 0;
  Proterritorio = 0;
  MiraFlores = 0;
  Solidaridad = 0;
  PayoObispo = 0;
  AdolfoLopezMateos = 0;
  GustavoGutierrez = 0;
  BarrioBravo = 0;
  Centro = 0;
  AndresQuintanaRoo = 0;
  proterritorioAmpliacion1 = 0;
  nuevoprogreso = 0;
  martinezross = 0;
  cincoDeAbril = 0;
  plutarcoEliasCalles = 0;
  framboyanes = 0;
  lagunitas = 0;
  delBosque = 0;
  forjadores = 0;
  constituyentes = 0;
  jardines = 0;
  primeraLegislatura = 0;
  italia = 0;
  campestre = 0;
  carranza = 0;
  taxistas = 0;
  magisterial = 0;
  ochodeOctubre = 0;
  pactoObrero = 0;
  a17deOctubre = 0;
  franciscoMujica = 0;



  //Datos de la colonia Caribe
  almacenarHora24 = []; c24 = 0;
  almacenarHora1 = [];  c1 = 0;
  almacenarHora2 = [];  c2 = 0;
  almacenarHora3 = [];  c3 = 0;
  almacenarHora4 = [];  c4 = 0; 
  almacenarHora5 = [];  c5 = 0;
  almacenarHora6 = [];  c6 = 0;
  almacenarHora7 = [];  c7 = 0;
  almacenarHora8 = [];  c8 = 0;
  almacenarHora9 = [];  c9 = 0;
  almacenarHora10 = []; c10 = 0;
  almacenarHora11 = []; c11 = 0;
  almacenarHora12 = []; c12 = 0;
  almacenarHora13 = []; c13 = 0;
  almacenarHora14 = []; c14 = 0;
  almacenarHora15 = []; c15 = 0;
  almacenarHora16 = []; c16 = 0;
  almacenarHora17 = []; c17 = 0;
  almacenarHora18 = []; c18 = 0;
  almacenarHora19 = []; c19 = 0;
  almacenarHora20 = []; c20 = 0;
  almacenarHora21 = []; c21 = 0;
  almacenarHora22 = []; c22 = 0;
  almacenarHora23 = []; c23 = 0;

  
  
  totalIncidentes = [];
  incidentes = [] 


  constructor(public modalController: ModalController,  public datosServicios:DatosService) {
    this.ref.on('value',resp => {
      this.Data = snapshotToArray(resp);

    });
   }


  async presentModalAdolfoLopezMateos() {
    const modal = await this.modalController.create({
      component: ModalMapCaribePage
    });
     modal.present();
  }
  
  ngOnInit() {
    this.colonias();
  }

close (){
  this.modalController.dismiss();
}



  //---------------------RECORRIDO DE DATOS DE COLONIAS EN LA BASE DE DATOS---------------------
  public colonias(){
    this.ref.on('value',resp => {
        this.Data = snapshotToArray(resp);
  
        for (let i = 0; i< this.Data.length; i++){
            var valor = this.Data[i];
          
             //--------------------------------------COLONIA PROTERRITORIO ------------------------------------
  
            if (valor.COLONIAS == "Caribe") {
              this.Caribe += 1;
              
            }
  
            
            //--------------------------------------COLONIA PROTERRITORIO ------------------------------------
  
            if (valor.COLONIAS == "Proterritorio"){
              this.Proterritorio+=1;
            
            }
  
            if (valor.COLONIAS == "Miraflores"){
              this.MiraFlores+=1;
            }
  
  //           //--------------------------------------COLONIA SOLIDARIDAD ------------------------------------
  
            if (valor.COLONIAS == "Solidaridad"){
              this.Solidaridad+=1;
  
            }
  
            if (valor.COLONIAS == "Payo Obispo"){
              this.PayoObispo+=1;

              this.incidentes.push(this.Data[i].TIPO_DE_INCIDENTE);
  
              if (valor.TIPO_DE_INCIDENTE == "OTROS ACTOS RELACIONADOS CON EL PATRIMONIO"){
                 this.otrosActosRelacionadosP_Prote +=1;
                 this.incidenteProte1.push(this.Data[i].TIPO_DE_INCIDENTE);
              }
  
              
              if (valor.TIPO_DE_INCIDENTE == "TENTATIVA DE ROBO"){
                this.tentativaDeRobo_prote+=1;
                this.incidenteProte2.push(this.Data[i].TIPO_DE_INCIDENTE);
             }
  
             
                if (valor.TIPO_DE_INCIDENTE == "ABUSO DE CONFIANZA"){
                  this.abusoDeConfianza_prote+=1;
                  this.incidenteProte3.push(this.Data[i].TIPO_DE_INCIDENTE);
  
              }
  
                if (valor.TIPO_DE_INCIDENTE == "ROBO DE VEHICULO PARTICULAR SIN VIOLENCIA"){
                  this.roboVehiculoPartiSinViolencia_prote+=1;
                  this.incidenteProte4.push(this.Data[i].TIPO_DE_INCIDENTE);
  
              }
           
  
                if (valor.TIPO_DE_INCIDENTE == "ROBO A ESCUELA SIN VIOLENCIA"){
                  this.roboEscuelaSinViolencia_prote+=1;
                  this.incidenteProte5.push(this.Data[i].TIPO_DE_INCIDENTE);
  
              }
  
            
                if (valor.TIPO_DE_INCIDENTE == "ROBO A NEGOCIO CON VIOLENCIA"){
                  this.roboNegocioSinViolencia_prote+=1;
                  this.incidenteProte6.push(this.Data[i].TIPO_DE_INCIDENTE);
  
                }
  
  
          
                if (valor.TIPO_DE_INCIDENTE == "ROBO A TRANSEUNTE CON VIOLENCIA"){
                  this.roboTrausanteSinviolencia_prote+=1;
                  this.incidenteProte7.push(this.Data[i].TIPO_DE_INCIDENTE);
  
              }
  
              
                if (valor.TIPO_DE_INCIDENTE == "CRISTALAZO O ROBO AL INTERIOR DE VEHICULO"){
                  this.cristalazoVehiculo_prote+=1;
                  this.incidenteProte8.push(this.Data[i].TIPO_DE_INCIDENTE);
  
              }
  
            
              if (valor.TIPO_DE_INCIDENTE == "ROBO A CASA HABITACION SIN VIOLENCIA"){
                this.roboCasaHabitacionSinViolencia+=1;
                this.incidenteProte9.push(this.Data[i].TIPO_DE_INCIDENTE);
  
            }
  
              
              if (valor.TIPO_DE_INCIDENTE == "ALLANAMIENTO DE MORADA"){
                this.allamientoMorada_prote+=1;
                this.incidenteProte10.push(this.Data[i].TIPO_DE_INCIDENTE);
  
              }
  
  
              
              if (valor.TIPO_DE_INCIDENTE == "ROBO A NEGOCIO SIN VIOLENCIA"){
                this.roboNegocioSinViolencia+=1;
                this.incidenteProte11.push(this.Data[i].TIPO_DE_INCIDENTE);
  
              }
  
              if (this.roboCasaHabitacionSinViolencia >= this.allamientoMorada_prote){

              }
              
  
  
                 //SE OBTIENE LOS HORARIOS EN EN EL QUE FUERON COMETIDOS LOS DELITOS DE "PROTERRITORIO"
                 if (valor.HORA >= "0:00:00") {
                  if (valor.HORA <= "0:59:00") {
                    this.almacenarHora24.push(this.Data[i].HORA);
                    this.c24+=1;
                  }
                }
    
                if (valor.HORA >= "1:00:00") {
                  if (valor.HORA <= "1:59:00") {
                    this.almacenarHora1.push(this.Data[i].HORA);
                    this.c1+=1;
                  }
                }
    
                if (valor.HORA >= "2:00:00") {
                  if (valor.HORA <= "2:59:00") {
                    this.almacenarHora2.push(this.Data[i].HORA);
                    this.c2+=1;
                  }
                }
    
                if (valor.HORA >= "3:00:00") {
                  if (valor.HORA <= "3:59:00") {
                    this.almacenarHora3.push(this.Data[i].HORA);
                    this.c3+=1;
                  }
                }
    
                if (valor.HORA >= "4:00:00") {
                  if (valor.HORA <= "4:59:00") {
                    this.almacenarHora4.push(this.Data[i].HORA);
                    this.c4+=1;
                  }
                }
    
                if (valor.HORA >= "5:00:00") {
                  if (valor.HORA <= "5:59:00") {
                    this.almacenarHora5.push(this.Data[i].HORA);
                    this.c5+=1;
                  }
                }
    
    
                if (valor.HORA >= "6:00:00") {
                  if (valor.HORA <= "6:59:00") {
                    this.almacenarHora6.push(this.Data[i].HORA);
                    this.c6+=1;
                  }
                }
    
    
                if (valor.HORA >= "7:00:00") {
                  if (valor.HORA <= "7:59:00") {
                    this.almacenarHora7.push(this.Data[i].HORA);
                    this.c7+=1;
                  }
                }
    
                if (valor.HORA >= "8:00:00") {
                  if (valor.HORA <= "8:59:00") {
                    this.almacenarHora8.push(this.Data[i].HORA);
                    this.c8+=1;
                  }
                }
    
                if (valor.HORA >= "9:00:00") {
                  if (valor.HORA <= "9:59:00") {
                    this.almacenarHora9.push(this.Data[i].HORA);
                    this.c9+=1;
                  }
                }
    
                if (valor.HORA >= "10:00:00") {
                  if (valor.HORA <= "10:59:00") {
                    this.almacenarHora10.push(this.Data[i].HORA);
                    this.c10+=1;
                  }
                }
    
                if (valor.HORA >= "11:00:00") {
                  if (valor.HORA <= "11:59:00") {
                    this.almacenarHora11.push(this.Data[i].HORA);
                    this.c11+=1;
                  }
                }
    
                
                if (valor.HORA >= "12:00:00") {
                  if (valor.HORA <= "12:59:00") {
                    this.almacenarHora12.push(this.Data[i].HORA);
                    this.c12+=1;
                  }
                }
                 
                
                if (valor.HORA >= "13:00:00") {
                  if (valor.HORA <= "13:59:00") {
                    this.almacenarHora13.push(this.Data[i].HORA);
                    this.c13+=1;
                  }
                }
                
    
                if (valor.HORA >= "14:00:00") {
                  if (valor.HORA <= "14:59:00") {
                    this.almacenarHora14.push(this.Data[i].HORA);
                    this.c14+=1;
                  }
                }
    
    
                if (valor.HORA >= "15:00:00") {
                  if (valor.HORA <= "15:59:00") {
                    this.almacenarHora15.push(this.Data[i].HORA);
                    this.c15+=1;
                  }
                }
    
                
                if (valor.HORA >= "16:00:00") {
                  if (valor.HORA <= "16:59:00") {
                    this.almacenarHora16.push(this.Data[i].HORA);
                    this.c16+=1;
                  }
                }
    
                
                if (valor.HORA >= "17:00:00") {
                  if (valor.HORA <= "17:59:00") {
                    this.almacenarHora17.push(this.Data[i].HORA);
                    this.c17+=1;
                  }
                }
    
                
                if (valor.HORA >= "18:00:00") {
                  if (valor.HORA <= "18:59:00") {
                    this.almacenarHora18.push(this.Data[i].HORA);
                    this.c18+=1;
                  }
                }
    
                
                if (valor.HORA >= "19:00:00") {
                  if (valor.HORA <= "19:59:00") {
                    this.almacenarHora19.push(this.Data[i].HORA);
                    this.c19+=1;
                  }
                }
    
                
                if (valor.HORA >= "20:00:00") {
                  if (valor.HORA <= "20:59:00") {
                    this.almacenarHora20.push(this.Data[i].HORA);
                    this.c20+=1;
                  }
                }
    
                
                if (valor.HORA >= "21:00:00") {
                  if (valor.HORA <= "21:59:00") {
                    this.almacenarHora21.push(this.Data[i].HORA);
                    this.c21+=1;
                  }
                }
    
                
                if (valor.HORA >= "22:00:00") {
                  if (valor.HORA <= "22:59:00") {
                    this.almacenarHora22.push(this.Data[i].HORA);
                    this.c22+=1;
                  }
                }
    
                
                if (valor.HORA >= "23:00:00") {
                  if (valor.HORA <= "23:59:00") {
                    this.almacenarHora23.push(this.Data[i].HORA);
                    this.c23+=1;
                  }
                }
  
            }
  
             //--------------------------------------COLONIA ADOLFO LOPEZ MATEOS ------------------------------------
            if (valor.COLONIAS == "Adolfo L�pez Mateos 2"){
              this.AdolfoLopezMateos+=1;
                 
            }

        
            if (valor.COLONIAS == "Gustavo Gutierrez"){
              this.GustavoGutierrez+=1;
            }
  
            if (valor.COLONIAS == "Barrio Bravo"){
              this.BarrioBravo+=1;
            }
  
              //--------------------------------------           CENTRO          ------------------------------------  
            if (valor.COLONIAS == "Centro"){
              this.Centro+=1;
  
            }
  
            if (valor.COLONIAS == "Andres Quintana Roo"){
              this.AndresQuintanaRoo+=1;
            }
  
            if (valor.COLONIAS == "Proterritorio Ampliacion 1"){
              this.proterritorioAmpliacion1+=1;
            }
  
            if (valor.COLONIAS == "Nuevo Progreso"){
              this.nuevoprogreso+=1;
            }
  
            if (valor.COLONIAS == "Martinez Ross"){
              this.martinezross+=1;
            }
  
            if (valor.COLONIAS == "5 de Abril"){
              this.cincoDeAbril+=1;
            }
  
            if (valor.COLONIAS == "Plutarco Elias Calles"){
              this.plutarcoEliasCalles+=1;
            }
  
           if (valor.COLONIAS == "Framboyanes"){
              this.framboyanes+=1;
  
            }
  
          if (valor.COLONIAS == "Lagunitas"){
              this.lagunitas+=1;
  
            }
  
          if (valor.COLONIAS == "del Bosque"){
              this.delBosque+=1;
  
            }
  
          if (valor.COLONIAS == "Forjadores"){
              this.forjadores+=1;
  
            }
  
          if (valor.COLONIAS == "Constituyentes"){
              this.constituyentes+=1;
  
            }
  
          if (valor.COLONIAS == "Jardines"){
              this.jardines+=1;
  
            }
  
          if (valor.COLONIAS == "Primera Legislatura"){
              this.primeraLegislatura+=1;
  
            }
  
          if (valor.COLONIAS == "Italia"){
              this.italia+=1;
  
            }
  
          if (valor.COLONIAS == "Fracc Campestre"){
              this.campestre+=1;
  
            }
  
          if (valor.COLONIAS == "Venustiano Carranza Casitas"){
              this.carranza+=1;
  
            }
  
          if (valor.COLONIAS == "Taxistas"){
              this.taxistas+=1;
  
            }
  
          if (valor.COLONIAS == "Magisterial"){
             this.magisterial+=1;
  
            }
  
          if (valor.COLONIAS == "8 de Octubre"){
            this.ochodeOctubre+=1;
  
            }
  
          if (valor.COLONIAS == "Pacto Obrero"){
              this.pactoObrero+=1;
  
              }
  
          if (valor.COLONIAS == "Infonavit 17 de Octubre"){
              this.a17deOctubre+=1;
  
                }
  
          if (valor.COLONIAS == "Infonavit Francisco J Mujica"){
              this.franciscoMujica+=1;
                }
        }

      

        
           //********************************************************* */
              //Comparacion de la hora de la colonia Caribe
              //********************************************************* */ 
              if (this.c24 >= 8){
                this.almacenaMientoCaribe.push("00:00");
              }
              if (this.c1 >= 8){
                this.almacenaMientoCaribe.push("1:00");
              }
              if (this.c2 >= 8){
                this.almacenaMientoCaribe.push("2:00");
              }
              if (this.c3 >= 8){
                this.almacenaMientoCaribe.push("3:00");
              }
              if (this.c4 >= 8){
                this.almacenaMientoCaribe.push("4:00");
              }
              if (this.c5 >= 8){
                this.almacenaMientoCaribe.push("5:00");
              }
              if (this.c6 >= 8){
                this.almacenaMientoCaribe.push("6:00");
              }
              if (this.c7 >= 8){
                this.almacenaMientoCaribe.push("7:00");
              }
              if (this.c8 >= 8){
                this.almacenaMientoCaribe.push("8:00");
              }
              if (this.c9 >= 8){
                this.almacenaMientoCaribe.push("9:00");
              }
              if (this.c10 >= 8){
                this.almacenaMientoCaribe.push("10:00");
              }
              if (this.c11 >= 8){
                this.almacenaMientoCaribe.push("11:00");
              }
              if (this.c12 >= 8){
                this.almacenaMientoCaribe.push("12:00");
              }
              if (this.c13 >= 8){
                this.almacenaMientoCaribe.push("13:00");
              }
              if (this.c14 >= 8){
                this.almacenaMientoCaribe.push("14:00");
              }
  
              if (this.c15 >= 8){
                this.almacenaMientoCaribe.push("15:00");
              }
  
              if (this.c16 >= 8){
                this.almacenaMientoCaribe.push("16:00");
              }
  
              if (this.c17 >= 8){
                this.almacenaMientoCaribe.push("17:00");
              }
  
              if (this.c18 >= 8){
                this.almacenaMientoCaribe.push("18:00");
              }
              if (this.c19 >= 8){
                this.almacenaMientoCaribe.push("19:00");
              }
  
              if (this.c20 >= 8){
                this.almacenaMientoCaribe.push("20:00");
              }
  
              if (this.c21 >= 8){
                this.almacenaMientoCaribe.push("21:00");
              }
  
              if (this.c22 >= 8){
                this.almacenaMientoCaribe.push("22:00");
              }
  
              if (this.c23 >= 8){
                this.almacenaMientoCaribe.push("23:00");
              }
  
  
      });
  
  
      // console.log(this.incidentes);
      // console.log(this.resultIncidentesCaribe)
      // console.log(this.incidentesCaribe);
       
  
      console.log(this.almacenaMientoProterritorio);
      console.log(this.incidentes);
      console.log(this.AdolfoLopezMateos);
  
  
      //console.log(this.incidentesCaribe);
      console.log(this.incidenteProte1);
      console.log(this.incidenteProte2);
      console.log(this.incidenteProte3);
      console.log(this.incidenteProte4);
      console.log(this.incidenteProte5);
      console.log(this.incidenteProte6);
      console.log(this.incidenteProte7);
      console.log(this.incidenteProte8);
      console.log(this.incidenteProte9);
      console.log(this.incidenteProte10);
      console.log(this.incidenteProte11);
      

      console.log(this.total);
              
    }


    // public hola() {
    //   for (let i=0; this.array.length; i++){
    //     if (this.array[i] > this.array[this.a]){
    //       this.almacenamientoRankingColonia.push(this.array[i]);
          
    //     }
    //     // if (this.total[i] < this.total[this.a]){
    //     //   this.almacenamientoRankingColonia.push(this.total[this.a]);
          
    //     // }
    //     // if (this.total[i] == this.total[this.a]){
    //     //   this.almacenamientoRankingColonia.pop();
    //     // }
    //     this.a+=1;
    //   }
    //   console.log("Almacenamiento",this.almacenamientoRankingColonia);
     
    // }
   


}
