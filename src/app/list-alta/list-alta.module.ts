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
  declarations: [ListAltaPage],
  entryComponents : [ModalPagePage, ModalMapProterritorioPage],

})
export class ListAltaPageModule {}
