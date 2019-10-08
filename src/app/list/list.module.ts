import { Contacts } from '@ionic-native/contacts/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';

import { SMS } from '@ionic-native/sms/ngx';
import {CallNumber} from '@ionic-native/call-number/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ])
  ],providers:[Contacts,SMS,CallNumber],
  declarations: [ListPage]
})
export class ListPageModule {}
