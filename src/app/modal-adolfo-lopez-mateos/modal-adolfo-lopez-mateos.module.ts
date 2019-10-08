import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalAdolfoLopezMateosPage } from './modal-adolfo-lopez-mateos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAdolfoLopezMateosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalAdolfoLopezMateosPage]
})
export class ModalAdolfoLopezMateosPageModule {}
