import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalMapPayoObispoPage } from './modal-map-payo-obispo.page';

const routes: Routes = [
  {
    path: '',
    component: ModalMapPayoObispoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalMapPayoObispoPage]
})
export class ModalMapPayoObispoPageModule {}
