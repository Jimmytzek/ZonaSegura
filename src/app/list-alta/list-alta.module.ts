import { ModalPayoObispoPage } from './../modal-payo-obispo/modal-payo-obispo.page';
import { ModalPagePageModule } from './../modal-page/modal-page.module';
import { ModalMapPayoObispoPage } from './../modal-map-payo-obispo/modal-map-payo-obispo.page';
import { ModalMapCaribePage } from './../modal-map-caribe/modal-map-caribe.page';
import { ModalCaribePage } from './../modal-caribe/modal-caribe.page';
import { ModalAdolfoLopezMateosPage } from './../modal-adolfo-lopez-mateos/modal-adolfo-lopez-mateos.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListAltaPage } from './list-alta.page';
import { ModalPagePage } from "../modal-page/modal-page.page";

import {ModalMapProterritorioPage } from "../modal-map-proterritorio/modal-map-proterritorio.page";


const routes: Routes = [
  {
    path: '',
    component: ListAltaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListAltaPage,ModalCaribePage,ModalMapProterritorioPage,ModalPagePage,
    ModalAdolfoLopezMateosPage,ModalPayoObispoPage],
  entryComponents : [ModalCaribePage,ModalMapProterritorioPage,ModalPagePage,
    ModalAdolfoLopezMateosPage,ModalPayoObispoPage],

})
export class ListAltaPageModule {}
