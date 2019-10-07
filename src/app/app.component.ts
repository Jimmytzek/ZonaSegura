import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import{timer} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  showSplash= true;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private router: Router,
    private androidPermissions: AndroidPermissions
  ) {

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_CONTACTS).then(
        result => console.log('Has permission?',result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_CONTACTS)
      );
      
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_CONTACTS, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
  
  //
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.SEND_SMS).then(
        result => console.log('Has permission?',result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS)
      );
      
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.SEND_SMS, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
  //
  
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CALL_PHONE).then(
        result => console.log('Has permission?',result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CALL_PHONE)
      );
  
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CALL_PHONE, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(()=>this.showSplash=false)

      this.storage.get('registered').then(d=>{
        if(d == true){
          this.router.navigateByUrl('/list');
        }else{
          this.router.navigateByUrl('/');

        }
      });
    });
  }
}
