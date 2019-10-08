import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalPayoObispoPage } from './modal-payo-obispo.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPayoObispoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalPayoObispoPage]
})
export class ModalPayoObispoPageModule {}
