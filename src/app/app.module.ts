import { ModalPayoObispoPage } from './modal-payo-obispo/modal-payo-obispo.page';
import { ModalCaribePage } from './modal-caribe/modal-caribe.page';
import { ModalAdolfoLopezMateosPage } from './modal-adolfo-lopez-mateos/modal-adolfo-lopez-mateos.page';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {firebaseConfig } from "../environments/environment";
import {AngularFireModule} from "@angular/fire";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { IonicStorageModule, Storage } from '@ionic/storage';
import {Contacts} from '@ionic-native/contacts/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalPagePage } from './modal-page/modal-page.page';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: 
  [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig), AngularFireDatabaseModule,IonicStorageModule.forRoot(),
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Contacts,
    AndroidPermissions,
    Geolocation
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
