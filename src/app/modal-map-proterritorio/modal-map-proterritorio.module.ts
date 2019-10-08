import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalMapProterritorioPage } from './modal-map-proterritorio.page';

const routes: Routes = [
  {
    path: '',
    component: ModalMapProterritorioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalMapProterritorioPage]
})
export class ModalMapProterritorioPageModule {}
