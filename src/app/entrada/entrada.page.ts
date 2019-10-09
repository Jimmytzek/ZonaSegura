import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Contacts, Contact, ContactName, ContactField } from '@ionic-native/contacts/ngx';
import { AuthService } from './../servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { AngularFireDatabase } from '@angular/fire/database';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.page.html',
  styleUrls: ['./entrada.page.scss'],
})
export class EntradaPage implements OnInit {
  sexo: number = -1;
  local:boolean=true;
  myContacts : Contact[] = [];
  MContacts = [];
  dato=[];

  constructor(public router:Router, private afDb: AngularFireDatabase, private storage: Storage,private contacts:Contacts,
    private global:AuthService, private permission: AndroidPermissions) {
      this.permission.checkPermission(this.permission.PERMISSION.READ_CONTACTS).then(
        result => console.log('Has permission?',result.hasPermission),
        err => this.permission.requestPermission(this.permission.PERMISSION.READ_CONTACTS)
      );
      
      this.permission.requestPermissions([this.permission.PERMISSION.READ_CONTACTS, this.permission.PERMISSION.GET_ACCOUNTS]);
  
  //
      this.permission.checkPermission(this.permission.PERMISSION.SEND_SMS).then(
        result => console.log('Has permission?',result.hasPermission),
        err => this.permission.requestPermission(this.permission.PERMISSION.SEND_SMS)
      );
      
      this.permission.requestPermissions([this.permission.PERMISSION.SEND_SMS, this.permission.PERMISSION.GET_ACCOUNTS]);
  //
  
      this.permission.checkPermission(this.permission.PERMISSION.CALL_PHONE).then(
        result => console.log('Has permission?',result.hasPermission),
        err => this.permission.requestPermission(this.permission.PERMISSION.CALL_PHONE)
      );
  
      this.permission.requestPermissions([this.permission.PERMISSION.CALL_PHONE, this.permission.PERMISSION.GET_ACCOUNTS]);
  
   }

  ngOnInit() {

    this.storage.get('dato').then((val) => {
      this.MContacts = val;
      
    });
    this.getContacts();
  }

  getContacts(){
    let options = {
      filter:'',
      multiple: true,
      hasPhoneNumber: true
    };
    this.permission.checkPermission(this.permission.PERMISSION.READ_CONTACTS).then(
      result => {
        this.contacts.find(['*'],options).then((contacts : Contact[])=> {
          this.myContacts=contacts;
          console.log('Contacts',contacts);
        });
      },
      err => this.permission.requestPermission(this.permission.PERMISSION.READ_CONTACTS)
    );
  }

  buttonClick(){
    let user = {
      Sexo: this.sexo,
      Local: this.local
    }
    this.afDb.database.ref('/usuarios').push(user).then(()=>{
      this.storage.set('registered', true).then(()=>{
        this.router.navigateByUrl('/list');
      });
    });
  }
  saveContascts(){
    this.global.variable = this.MContacts;
    this.storage.set('dato',this.MContacts);
      console.log(this.dato);
      // this.router.navigate(this.new);
  }
}
