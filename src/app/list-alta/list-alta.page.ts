import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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


