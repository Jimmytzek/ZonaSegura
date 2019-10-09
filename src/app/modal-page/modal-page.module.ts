import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalPagePage } from './modal-page.page';
import {ModalMapProterritorioPage } from "../modal-map-proterritorio/modal-map-proterritorio.page";

const routes: Routes = [
  {
    path: '',
    component: ModalPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalPagePage, ModalMapProterritorioPage ],
  entryComponents : [ModalMapProterritorioPage],

  
})
export class ModalPagePageModule {}








