import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EntradaPage } from './entrada.page';
import { Contacts} from '@ionic-native/contacts/ngx';

const routes: Routes = [
  {
    path: '',
    component: EntradaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],providers:[Contacts],
  declarations: [EntradaPage]
})
export class EntradaPageModule {}
