import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VentanaComponent } from "../ventana/ventana.component";

import * as firebase from 'firebase';
import { firebaseConfig, snapshotToArray } from 'src/environments/environment';
import { NavController, AlertController } from '@ionic/angular';
import { DatosService } from './../service/datos.service';


@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {

  Data = [];
  ref = firebase.database().ref('Data/')

  myDate = new Date();

  almacenaMientoCaribe = [];
  almacenaMientoProterritorio = [];
  almacenamientoSolidaridad = [];
  almacenamientoAdolfo = [];
  almacenamientoCentro = [];


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

// Datos de la colonia Proterritorio
  
  almacenarHora24Pro = []; Pro24 = 0;
  almacenarHora1Pro = [];  Pro1 = 0;
  almacenarHora2Pro = [];  Pro2 = 0;
  almacenarHora3Pro = [];  Pro3 = 0;
  almacenarHora4Pro = [];  Pro4 = 0; 
  almacenarHora5Pro = [];  Pro5 = 0;
  almacenarHora6Pro = [];  Pro6 = 0;
  almacenarHora7Pro = [];  Pro7 = 0;
  almacenarHora8Pro = [];  Pro8 = 0;
  almacenarHora9Pro = [];  Pro9 = 0;
  almacenarHora10Pro = []; Pro10= 0;
  almacenarHora11Pro = []; Pro11 = 0;
  almacenarHora12Pro = []; Pro12 = 0;
  almacenarHora13Pro = []; Pro13 = 0;
  almacenarHora14Pro = []; Pro14 = 0;
  almacenarHora15Pro = []; Pro15 = 0;
  almacenarHora16Pro = []; Pro16 = 0;
  almacenarHora17Pro = []; Pro17 = 0;
  almacenarHora18Pro = []; Pro18 = 0;
  almacenarHora19Pro = []; Pro19 = 0;
  almacenarHora20Pro = []; Pro20 = 0;
  almacenarHora21Pro = []; Pro21 = 0;
  almacenarHora22Pro = []; Pro22 = 0;
  almacenarHora23Pro = []; Pro23 = 0;
 

  // Datos de la colonia Proterritorio
  
  almacenarHora24Soli = []; Soli24 = 0;
  almacenarHora1Soli = [];  Soli1 = 0;
  almacenarHora2Soli = [];  Soli2 = 0;
  almacenarHora3Soli = [];  Soli3 = 0;
  almacenarHora4Soli = [];  Soli4 = 0; 
  almacenarHora5Soli = [];  Soli5 = 0;
  almacenarHora6Soli = [];  Soli6 = 0;
  almacenarHora7Soli = [];  Soli7 = 0;
  almacenarHora8Soli = [];  Soli8 = 0;
  almacenarHora9Soli = [];  Soli9 = 0;
  almacenarHora10Soli = []; Soli10= 0;
  almacenarHora11Soli = []; Soli11 = 0;
  almacenarHora12Soli = []; Soli12 = 0;
  almacenarHora13Soli = []; Soli13 = 0;
  almacenarHora14Soli = []; Soli14 = 0;
  almacenarHora15Soli = []; Soli15 = 0;
  almacenarHora16Soli = []; Soli16 = 0;
  almacenarHora17Soli = []; Soli17 = 0;
  almacenarHora18Soli = []; Soli18 = 0;
  almacenarHora19Soli = []; Soli19 = 0;
  almacenarHora20Soli = []; Soli20 = 0;
  almacenarHora21Soli = []; Soli21 = 0;
  almacenarHora22Soli = []; Soli22 = 0;
  almacenarHora23Soli = []; Soli23 = 0;


   // Datos de la colonia Proterritorio
  
   almacenarHora24Adolfo = []; Adolfo24 = 0;
   almacenarHora1Adolfo = [];  Adolfo1 = 0;
   almacenarHora2Adolfo = [];  Adolfo2 = 0;
   almacenarHora3Adolfo = [];  Adolfo3 = 0;
   almacenarHora4Adolfo = [];  Adolfo4 = 0; 
   almacenarHora5Adolfo = [];  Adolfo5 = 0;
   almacenarHora6Adolfo = [];  Adolfo6 = 0;
   almacenarHora7Adolfo = [];  Adolfo7 = 0;
   almacenarHora8Adolfo = [];  Adolfo8 = 0;
   almacenarHora9Adolfo = [];  Adolfo9 = 0;
   almacenarHora10Adolfo = []; Adolfo10= 0;
   almacenarHora11Adolfo = []; Adolfo11 = 0;
   almacenarHora12Adolfo = []; Adolfo12 = 0;
   almacenarHora13Adolfo = []; Adolfo13 = 0;
   almacenarHora14Adolfo = []; Adolfo14 = 0;
   almacenarHora15Adolfo = []; Adolfo15 = 0;
   almacenarHora16Adolfo = []; Adolfo16 = 0;
   almacenarHora17Adolfo = []; Adolfo17 = 0;
   almacenarHora18Adolfo = []; Adolfo18 = 0;
   almacenarHora19Adolfo = []; Adolfo19 = 0;
   almacenarHora20Adolfo = []; Adolfo20 = 0;
   almacenarHora21Adolfo = []; Adolfo21 = 0;
   almacenarHora22Adolfo = []; Adolfo22 = 0;
   almacenarHora23Adolfo = []; Adolfo23 = 0;
 


   // Datos de la colonia Proterritorio
  
   almacenarHora24Centro = []; Centro24 = 0;
   almacenarHora1Centro = [];  Centro1 = 0;
   almacenarHora2Centro = [];  Centro2 = 0;
   almacenarHora3Centro = [];  Centro3 = 0;
   almacenarHora4Centro = [];  Centro4 = 0; 
   almacenarHora5Centro = [];  Centro5 = 0;
   almacenarHora6Centro = [];  Centro6 = 0;
   almacenarHora7Centro = [];  Centro7 = 0;
   almacenarHora8Centro = [];  Centro8 = 0;
   almacenarHora9Centro = [];  Centro9 = 0;
   almacenarHora10Centro = []; Centro10= 0;
   almacenarHora11Centro = []; Centro11 = 0;
   almacenarHora12Centro = []; Centro12 = 0;
   almacenarHora13Centro = []; Centro13 = 0;
   almacenarHora14Centro = []; Centro14 = 0;
   almacenarHora15Centro = []; Centro15 = 0;
   almacenarHora16Centro = []; Centro16 = 0;
   almacenarHora17Centro = []; Centro17 = 0;
   almacenarHora18Centro = []; Centro18 = 0;
   almacenarHora19Centro = []; Centro19 = 0;
   almacenarHora20Centro = []; Centro20 = 0;
   almacenarHora21Centro = []; Centro21 = 0;
   almacenarHora22Centro = []; Centro22 = 0;
   almacenarHora23Centro = []; Centro23 = 0;
 

  constructor(public modalController: ModalController,  public datosServicios:DatosService) {
    this.ref.on('value',resp => {
      this.Data = snapshotToArray(resp);

    });
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


          //--------------------------------------COLONIA PROTERRITORIO ------------------------------------

          if (valor.COLONIAS == "Proterritorio"){
            this.Proterritorio+=1;


              //Se obtiene la cantidad de delitos que sucedieron en cada hora
              if (valor.HORA >= "0:00:00") {
                if (valor.HORA <= "0:59:00") {
                  this.almacenarHora24Pro.push(this.Data[i].HORA);
                  this.Pro24+=1;
                }
              }
  
              if (valor.HORA >= "1:00:00") {
                if (valor.HORA <= "1:59:00") {
                  this.almacenarHora1Pro.push(this.Data[i].HORA);
                  this.Pro1+=1;
                }
              }
  
              if (valor.HORA >= "2:00:00") {
                if (valor.HORA <= "2:59:00") {
                  this.almacenarHora2Pro.push(this.Data[i].HORA);
                  this.Pro2+=1;
                }
              }
  
              if (valor.HORA >= "3:00:00") {
                if (valor.HORA <= "3:59:00") {
                  this.almacenarHora3Pro.push(this.Data[i].HORA);
                  this.Pro3+=1;
                }
              }
  
              if (valor.HORA >= "4:00:00") {
                if (valor.HORA <= "4:59:00") {
                  this.almacenarHora4Pro.push(this.Data[i].HORA);
                  this.Pro4+=1;
                }
              }
  
              if (valor.HORA >= "5:00:00") {
                if (valor.HORA <= "5:59:00") {
                  this.almacenarHora5Pro.push(this.Data[i].HORA);
                  this.Pro5+=1;
                }
              }
  
  
              if (valor.HORA >= "6:00:00") {
                if (valor.HORA <= "6:59:00") {
                  this.almacenarHora6Pro.push(this.Data[i].HORA);
                  this.Pro6+=1;
                }
              }
  
  
              if (valor.HORA >= "7:00:00") {
                if (valor.HORA <= "7:59:00") {
                  this.almacenarHora7Pro.push(this.Data[i].HORA);
                  this.Pro7+=1;
                }
              }
  
              if (valor.HORA >= "8:00:00") {
                if (valor.HORA <= "8:59:00") {
                  this.almacenarHora8Pro.push(this.Data[i].HORA);
                  this.Pro8+=1;
                }
              }
  
              if (valor.HORA >= "9:00:00") {
                if (valor.HORA <= "9:59:00") {
                  this.almacenarHora9Pro.push(this.Data[i].HORA);
                  this.Pro9+=1;
                }
              }
  
              if (valor.HORA >= "10:00:00") {
                if (valor.HORA <= "10:59:00") {
                  this.almacenarHora10Pro.push(this.Data[i].HORA);
                  this.Pro10+=1;
                }
              }
  
              if (valor.HORA >= "11:00:00") {
                if (valor.HORA <= "11:59:00") {
                  this.almacenarHora11Pro.push(this.Data[i].HORA);
                  this.Pro11+=1;
                }
              }
  
              
              if (valor.HORA >= "12:00:00") {
                if (valor.HORA <= "12:59:00") {
                  this.almacenarHora12Pro.push(this.Data[i].HORA);
                  this.Pro12+=1;
                }
              }
               
              
              if (valor.HORA >= "13:00:00") {
                if (valor.HORA <= "13:59:00") {
                  this.almacenarHora13Pro.push(this.Data[i].HORA);
                  this.Pro13+=1;
                }
              }
              
  
              if (valor.HORA >= "14:00:00") {
                if (valor.HORA <= "14:59:00") {
                  this.almacenarHora14Pro.push(this.Data[i].HORA);
                  this.Pro14+=1;
                }
              }
  
  
              if (valor.HORA >= "15:00:00") {
                if (valor.HORA <= "15:59:00") {
                  this.almacenarHora15Pro.push(this.Data[i].HORA);
                  this.Pro15+=1;
                }
              }
  
              
              if (valor.HORA >= "16:00:00") {
                if (valor.HORA <= "16:59:00") {
                  this.almacenarHora16Pro.push(this.Data[i].HORA);
                  this.Pro16+=1;
                }
              }
  
              
              if (valor.HORA >= "17:00:00") {
                if (valor.HORA <= "17:59:00") {
                  this.almacenarHora17Pro.push(this.Data[i].HORA);
                  this.Pro17+=1;
                }
              }
  
              
              if (valor.HORA >= "18:00:00") {
                if (valor.HORA <= "18:59:00") {
                  this.almacenarHora18Pro.push(this.Data[i].HORA);
                  this.Pro18+=1;
                }
              }
  
              
              if (valor.HORA >= "19:00:00") {
                if (valor.HORA <= "19:59:00") {
                  this.almacenarHora19Pro.push(this.Data[i].HORA);
                  this.Pro19+=1;
                }
              }
  
              
              if (valor.HORA >= "20:00:00") {
                if (valor.HORA <= "20:59:00") {
                  this.almacenarHora20Pro.push(this.Data[i].HORA);
                  this.Pro20+=1;
                }
              }
  
              
              if (valor.HORA >= "21:00:00") {
                if (valor.HORA <= "21:59:00") {
                  this.almacenarHora21Pro.push(this.Data[i].HORA);
                  this.Pro21+=1;
                }
              }
  
              
              if (valor.HORA >= "22:00:00") {
                if (valor.HORA <= "22:59:00") {
                  this.almacenarHora22Pro.push(this.Data[i].HORA);
                  this.Pro22+=1;
                }
              }
  
              
              if (valor.HORA >= "23:00:00") {
                if (valor.HORA <= "23:59:00") {
                  this.almacenarHora23Pro.push(this.Data[i].HORA);
                  this.Pro23+=1;
                }
              }

          }

          if (valor.COLONIAS == "Miraflores"){
            this.MiraFlores+=1;
          }

          //--------------------------------------COLONIA SOLIDARIDAD ------------------------------------

          if (valor.COLONIAS == "Solidaridad"){
            this.Solidaridad+=1;

           
               //Se obtiene la cantidad de delitos que sucedieron en cada hora
               if (valor.HORA >= "0:00:00") {
                if (valor.HORA <= "0:59:00") {
                  this.almacenarHora24Soli.push(this.Data[i].HORA);
                  this.Soli24+=1;
                }
              }
  
              if (valor.HORA >= "1:00:00") {
                if (valor.HORA <= "1:59:00") {
                  this.almacenarHora1Soli.push(this.Data[i].HORA);
                  this.Soli1+=1;
                }
              }
  
              if (valor.HORA >= "2:00:00") {
                if (valor.HORA <= "2:59:00") {
                  this.almacenarHora2Soli.push(this.Data[i].HORA);
                  this.Soli2+=1;
                }
              }
  
              if (valor.HORA >= "3:00:00") {
                if (valor.HORA <= "3:59:00") {
                  this.almacenarHora3Soli.push(this.Data[i].HORA);
                  this.Soli3+=1;
                }
              }
  
              if (valor.HORA >= "4:00:00") {
                if (valor.HORA <= "4:59:00") {
                  this.almacenarHora4Soli.push(this.Data[i].HORA);
                  this.Soli4+=1;
                }
              }
  
              if (valor.HORA >= "5:00:00") {
                if (valor.HORA <= "5:59:00") {
                  this.almacenarHora5Soli.push(this.Data[i].HORA);
                  this.Soli5+=1;
                }
              }
  
  
              if (valor.HORA >= "6:00:00") {
                if (valor.HORA <= "6:59:00") {
                  this.almacenarHora6Soli.push(this.Data[i].HORA);
                  this.Soli6+=1;
                }
              }
  
  
              if (valor.HORA >= "7:00:00") {
                if (valor.HORA <= "7:59:00") {
                  this.almacenarHora7Soli.push(this.Data[i].HORA);
                  this.Soli7+=1;
                }
              }
  
              if (valor.HORA >= "8:00:00") {
                if (valor.HORA <= "8:59:00") {
                  this.almacenarHora8Soli.push(this.Data[i].HORA);
                  this.Soli8+=1;
                }
              }
  
              if (valor.HORA >= "9:00:00") {
                if (valor.HORA <= "9:59:00") {
                  this.almacenarHora9Soli.push(this.Data[i].HORA);
                  this.Soli9+=1;
                }
              }
  
              if (valor.HORA >= "10:00:00") {
                if (valor.HORA <= "10:59:00") {
                  this.almacenarHora10Soli.push(this.Data[i].HORA);
                  this.Soli10+=1;
                }
              }
  
              if (valor.HORA >= "11:00:00") {
                if (valor.HORA <= "11:59:00") {
                  this.almacenarHora11Soli.push(this.Data[i].HORA);
                  this.Soli11+=1;
                }
              }
  
              
              if (valor.HORA >= "12:00:00") {
                if (valor.HORA <= "12:59:00") {
                  this.almacenarHora12Soli.push(this.Data[i].HORA);
                  this.Soli12+=1;
                }
              }
               
              
              if (valor.HORA >= "13:00:00") {
                if (valor.HORA <= "13:59:00") {
                  this.almacenarHora13Soli.push(this.Data[i].HORA);
                  this.Soli13+=1;
                }
              }
              
  
              if (valor.HORA >= "14:00:00") {
                if (valor.HORA <= "14:59:00") {
                  this.almacenarHora14Soli.push(this.Data[i].HORA);
                  this.Soli14+=1;
                }
              }
  
  
              if (valor.HORA >= "15:00:00") {
                if (valor.HORA <= "15:59:00") {
                  this.almacenarHora15Soli.push(this.Data[i].HORA);
                  this.Pro15+=1;
                }
              }
  
              
              if (valor.HORA >= "16:00:00") {
                if (valor.HORA <= "16:59:00") {
                  this.almacenarHora16Soli.push(this.Data[i].HORA);
                  this.Pro16+=1;
                }
              }
  
              
              if (valor.HORA >= "17:00:00") {
                if (valor.HORA <= "17:59:00") {
                  this.almacenarHora17Soli.push(this.Data[i].HORA);
                  this.Pro17+=1;
                }
              }
  
              
              if (valor.HORA >= "18:00:00") {
                if (valor.HORA <= "18:59:00") {
                  this.almacenarHora18Soli.push(this.Data[i].HORA);
                  this.Soli18+=1;
                }
              }
  
              
              if (valor.HORA >= "19:00:00") {
                if (valor.HORA <= "19:59:00") {
                  this.almacenarHora19Soli.push(this.Data[i].HORA);
                  this.Soli19+=1;
                }
              }
  
              
              if (valor.HORA >= "20:00:00") {
                if (valor.HORA <= "20:59:00") {
                  this.almacenarHora20Soli.push(this.Data[i].HORA);
                  this.Soli20+=1;
                }
              }
  
              
              if (valor.HORA >= "21:00:00") {
                if (valor.HORA <= "21:59:00") {
                  this.almacenarHora21Soli.push(this.Data[i].HORA);
                  this.Soli21+=1;
                }
              }
  
              
              if (valor.HORA >= "22:00:00") {
                if (valor.HORA <= "22:59:00") {
                  this.almacenarHora22Soli.push(this.Data[i].HORA);
                  this.Soli22+=1;
                }
              }
  
              
              if (valor.HORA >= "23:00:00") {
                if (valor.HORA <= "23:59:00") {
                  this.almacenarHora23Soli.push(this.Data[i].HORA);
                  this.Soli23+=1;
                }
              }
          }

          if (valor.COLONIAS == "Payo Obispo"){
            this.PayoObispo+=1;
          }

           //--------------------------------------COLONIA ADOLFO LOPEZ MATEOS ------------------------------------
          if (valor.COLONIAS == "Adolfo L�pez Mateos 2"){
            this.AdolfoLopezMateos+=1;

                 //Se obtiene la cantidad de delitos que sucedieron en cada hora
                 if (valor.HORA >= "0:00:00") {
                  if (valor.HORA <= "0:59:00") {
                    this.almacenarHora24Adolfo.push(this.Data[i].HORA);
                    this.Adolfo24+=1;
                  }
                }
    
                if (valor.HORA >= "1:00:00") {
                  if (valor.HORA <= "1:59:00") {
                    this.almacenarHora1Adolfo.push(this.Data[i].HORA);
                    this.Adolfo1+=1;
                  }
                }
    
                if (valor.HORA >= "2:00:00") {
                  if (valor.HORA <= "2:59:00") {
                    this.almacenarHora2Adolfo.push(this.Data[i].HORA);
                    this.Adolfo2+=1;
                  }
                }
    
                if (valor.HORA >= "3:00:00") {
                  if (valor.HORA <= "3:59:00") {
                    this.almacenarHora3Adolfo.push(this.Data[i].HORA);
                    this.Adolfo3+=1;
                  }
                }
    
                if (valor.HORA >= "4:00:00") {
                  if (valor.HORA <= "4:59:00") {
                    this.almacenarHora4Adolfo.push(this.Data[i].HORA);
                    this.Adolfo4+=1;
                  }
                }
    
                if (valor.HORA >= "5:00:00") {
                  if (valor.HORA <= "5:59:00") {
                    this.almacenarHora5Adolfo.push(this.Data[i].HORA);
                    this.Adolfo5+=1;
                  }
                }
    
    
                if (valor.HORA >= "6:00:00") {
                  if (valor.HORA <= "6:59:00") {
                    this.almacenarHora6Adolfo.push(this.Data[i].HORA);
                    this.Adolfo6+=1;
                  }
                }
    
    
                if (valor.HORA >= "7:00:00") {
                  if (valor.HORA <= "7:59:00") {
                    this.almacenarHora7Adolfo.push(this.Data[i].HORA);
                    this.Adolfo7+=1;
                  }
                }
    
                if (valor.HORA >= "8:00:00") {
                  if (valor.HORA <= "8:59:00") {
                    this.almacenarHora8Adolfo.push(this.Data[i].HORA);
                    this.Adolfo8+=1;
                  }
                }
    
                if (valor.HORA >= "9:00:00") {
                  if (valor.HORA <= "9:59:00") {
                    this.almacenarHora9Adolfo.push(this.Data[i].HORA);
                    this.Adolfo9+=1;
                  }
                }
    
                if (valor.HORA >= "10:00:00") {
                  if (valor.HORA <= "10:59:00") {
                    this.almacenarHora10Adolfo.push(this.Data[i].HORA);
                    this.Adolfo10+=1;
                  }
                }
    
                if (valor.HORA >= "11:00:00") {
                  if (valor.HORA <= "11:59:00") {
                    this.almacenarHora11Adolfo.push(this.Data[i].HORA);
                    this.Adolfo11+=1;
                  }
                }
    
                
                if (valor.HORA >= "12:00:00") {
                  if (valor.HORA <= "12:59:00") {
                    this.almacenarHora12Adolfo.push(this.Data[i].HORA);
                    this.Adolfo12+=1;
                  }
                }
                 
                
                if (valor.HORA >= "13:00:00") {
                  if (valor.HORA <= "13:59:00") {
                    this.almacenarHora13Adolfo.push(this.Data[i].HORA);
                    this.Adolfo13+=1;
                  }
                }
                
    
                if (valor.HORA >= "14:00:00") {
                  if (valor.HORA <= "14:59:00") {
                    this.almacenarHora14Adolfo.push(this.Data[i].HORA);
                    this.Adolfo14+=1;
                  }
                }
    
    
                if (valor.HORA >= "15:00:00") {
                  if (valor.HORA <= "15:59:00") {
                    this.almacenarHora15Adolfo.push(this.Data[i].HORA);
                    this.Adolfo15+=1;
                  }
                }
    
                
                if (valor.HORA >= "16:00:00") {
                  if (valor.HORA <= "16:59:00") {
                    this.almacenarHora16Adolfo.push(this.Data[i].HORA);
                    this.Adolfo16+=1;
                  }
                }
    
                
                if (valor.HORA >= "17:00:00") {
                  if (valor.HORA <= "17:59:00") {
                    this.almacenarHora17Adolfo.push(this.Data[i].HORA);
                    this.Adolfo17+=1;
                  }
                }
    
                
                if (valor.HORA >= "18:00:00") {
                  if (valor.HORA <= "18:59:00") {
                    this.almacenarHora18Adolfo.push(this.Data[i].HORA);
                    this.Adolfo18+=1;
                  }
                }
    
                
                if (valor.HORA >= "19:00:00") {
                  if (valor.HORA <= "19:59:00") {
                    this.almacenarHora19Adolfo.push(this.Data[i].HORA);
                    this.Adolfo19+=1;
                  }
                }
    
                
                if (valor.HORA >= "20:00:00") {
                  if (valor.HORA <= "20:59:00") {
                    this.almacenarHora20Adolfo.push(this.Data[i].HORA);
                    this.Adolfo20+=1;
                  }
                }
    
                
                if (valor.HORA >= "21:00:00") {
                  if (valor.HORA <= "21:59:00") {
                    this.almacenarHora21Adolfo.push(this.Data[i].HORA);
                    this.Adolfo21+=1;
                  }
                }
    
                
                if (valor.HORA >= "22:00:00") {
                  if (valor.HORA <= "22:59:00") {
                    this.almacenarHora22Adolfo.push(this.Data[i].HORA);
                    this.Adolfo22+=1;
                  }
                }
    
                
                if (valor.HORA >= "23:00:00") {
                  if (valor.HORA <= "23:59:00") {
                    this.almacenarHora23Adolfo.push(this.Data[i].HORA);
                    this.Adolfo23+=1;
                  }
                }
  
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

             //Se obtiene la cantidad de delitos que sucedieron en cada hora
             if (valor.HORA >= "0:00:00") {
              if (valor.HORA <= "0:59:00") {
                this.almacenarHora24Centro.push(this.Data[i].HORA);
                this.Centro24+=1;
              }
            }

            if (valor.HORA >= "1:00:00") {
              if (valor.HORA <= "1:59:00") {
                this.almacenarHora1Centro.push(this.Data[i].HORA);
                this.Centro1+=1;
              }
            }

            if (valor.HORA >= "2:00:00") {
              if (valor.HORA <= "2:59:00") {
                this.almacenarHora2Centro.push(this.Data[i].HORA);
                this.Centro2+=1;
              }
            }

            if (valor.HORA >= "3:00:00") {
              if (valor.HORA <= "3:59:00") {
                this.almacenarHora3Centro.push(this.Data[i].HORA);
                this.Centro3+=1;
              }
            }

            if (valor.HORA >= "4:00:00") {
              if (valor.HORA <= "4:59:00") {
                this.almacenarHora4Centro.push(this.Data[i].HORA);
                this.Centro4+=1;
              }
            }

            if (valor.HORA >= "5:00:00") {
              if (valor.HORA <= "5:59:00") {
                this.almacenarHora5Centro.push(this.Data[i].HORA);
                this.Centro5+=1;
              }
            }


            if (valor.HORA >= "6:00:00") {
              if (valor.HORA <= "6:59:00") {
                this.almacenarHora6Centro.push(this.Data[i].HORA);
                this.Centro6+=1;
              }
            }


            if (valor.HORA >= "7:00:00") {
              if (valor.HORA <= "7:59:00") {
                this.almacenarHora7Centro.push(this.Data[i].HORA);
                this.Centro7+=1;
              }
            }

            if (valor.HORA >= "8:00:00") {
              if (valor.HORA <= "8:59:00") {
                this.almacenarHora8Centro.push(this.Data[i].HORA);
                this.Centro8+=1;
              }
            }

            if (valor.HORA >= "9:00:00") {
              if (valor.HORA <= "9:59:00") {
                this.almacenarHora9Centro.push(this.Data[i].HORA);
                this.Centro9+=1;
              }
            }

            if (valor.HORA >= "10:00:00") {
              if (valor.HORA <= "10:59:00") {
                this.almacenarHora10Centro.push(this.Data[i].HORA);
                this.Centro10+=1;
              }
            }

            if (valor.HORA >= "11:00:00") {
              if (valor.HORA <= "11:59:00") {
                this.almacenarHora11Centro.push(this.Data[i].HORA);
                this.Centro11+=1;
              }
            }

            
            if (valor.HORA >= "12:00:00") {
              if (valor.HORA <= "12:59:00") {
                this.almacenarHora12Centro.push(this.Data[i].HORA);
                this.Centro12+=1;
              }
            }
             
            
            if (valor.HORA >= "13:00:00") {
              if (valor.HORA <= "13:59:00") {
                this.almacenarHora13Centro.push(this.Data[i].HORA);
                this.Centro13+=1;
              }
            }
            

            if (valor.HORA >= "14:00:00") {
              if (valor.HORA <= "14:59:00") {
                this.almacenarHora14Centro.push(this.Data[i].HORA);
                this.Centro14+=1;
              }
            }


            if (valor.HORA >= "15:00:00") {
              if (valor.HORA <= "15:59:00") {
                this.almacenarHora15Centro.push(this.Data[i].HORA);
                this.Centro15+=1;
              }
            }

            
            if (valor.HORA >= "16:00:00") {
              if (valor.HORA <= "16:59:00") {
                this.almacenarHora16Centro.push(this.Data[i].HORA);
                this.Centro16+=1;
              }
            }

            
            if (valor.HORA >= "17:00:00") {
              if (valor.HORA <= "17:59:00") {
                this.almacenarHora17Centro.push(this.Data[i].HORA);
                this.Centro17+=1;
              }
            }

            
            if (valor.HORA >= "18:00:00") {
              if (valor.HORA <= "18:59:00") {
                this.almacenarHora18Centro.push(this.Data[i].HORA);
                this.Centro18+=1;
              }
            }

            
            if (valor.HORA >= "19:00:00") {
              if (valor.HORA <= "19:59:00") {
                this.almacenarHora19Centro.push(this.Data[i].HORA);
                this.Centro19+=1;
              }
            }

            
            if (valor.HORA >= "20:00:00") {
              if (valor.HORA <= "20:59:00") {
                this.almacenarHora20Centro.push(this.Data[i].HORA);
                this.Centro20+=1;
              }
            }

            
            if (valor.HORA >= "21:00:00") {
              if (valor.HORA <= "21:59:00") {
                this.almacenarHora21Centro.push(this.Data[i].HORA);
                this.Centro21+=1;
              }
            }

            
            if (valor.HORA >= "22:00:00") {
              if (valor.HORA <= "22:59:00") {
                this.almacenarHora22Centro.push(this.Data[i].HORA);
                this.Centro22+=1;
              }
            }

            
            if (valor.HORA >= "23:00:00") {
              if (valor.HORA <= "23:59:00") {
                this.almacenarHora23Centro.push(this.Data[i].HORA);
                this.Centro23+=1;
              }
            }

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
     
  }

  prueba(){
    console.log(this.almacenaMientoCaribe.toString());
  }

}
