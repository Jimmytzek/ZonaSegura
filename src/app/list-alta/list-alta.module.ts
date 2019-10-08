import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListAltaPage } from './list-alta.page';
import { ModalPagePage } from "../modal-page/modal-page.page";
import { modalController } from '@ionic/core';

import {ModalMapProterritorioPage } from "../modal-map-proterritorio/modal-map-proterritorio.page";
import { ModalCaribePage } from "../modal-caribe/modal-caribe.page";
import { ModalMapCaribePage } from "../modal-map-caribe/modal-map-caribe.page";

import { ModalAdolfoLopezMateosPage } from "../modal-adolfo-lopez-mateos/modal-adolfo-lopez-mateos.page";
import { ModaMapAdolfoLopezMateosPage } from "../moda-map-adolfo-lopez-mateos/moda-map-adolfo-lopez-mateos.page";
import { ModalAdolfoLopezMateosPageModule } from '../modal-adolfo-lopez-mateos/modal-adolfo-lopez-mateos.module';
import { ModalPayoObispoPage } from "../modal-payo-obispo/modal-payo-obispo.page";
import { ModalMapPayoObispoPage } from '../modal-map-payo-obispo/modal-map-payo-obispo.page';

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
  declarations: [ListAltaPage, ModalPagePage, ModalMapProterritorioPage, ModalCaribePage, ModalMapCaribePage, ModalAdolfoLopezMateosPage, ModaMapAdolfoLopezMateosPage, ModalPayoObispoPage, ModalMapPayoObispoPage],
  entryComponents : [ModalPagePage, ModalMapProterritorioPage, ModalCaribePage, ModalMapCaribePage, ModalAdolfoLopezMateosPage, ModaMapAdolfoLopezMateosPage, ModalPayoObispoPage, ModalMapPayoObispoPage],
  // declarations: [ListAltaPage, ModalPagePage, ModalMapProterritorioPage],
  // entryComponents : [ModalPagePage, ModalMapProterritorioPage],

})
export class ListAltaPageModule {}
