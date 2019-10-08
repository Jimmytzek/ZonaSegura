import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModaMapAdolfoLopezMateosPage } from './moda-map-adolfo-lopez-mateos.page';

const routes: Routes = [
  {
    path: '',
    component: ModaMapAdolfoLopezMateosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModaMapAdolfoLopezMateosPage]
})
export class ModaMapAdolfoLopezMateosPageModule {}
