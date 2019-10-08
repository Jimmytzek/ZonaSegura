import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalCaribePage } from './modal-caribe.page';
import { ModalMapCaribePage } from "../modal-map-caribe/modal-map-caribe.page";

const routes: Routes = [
  {
    path: '',
    component: ModalCaribePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalCaribePage, ModalCaribePage]
})
export class ModalCaribePageModule {}
