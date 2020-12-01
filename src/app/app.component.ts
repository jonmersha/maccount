import { Component } from '@angular/core';
//import { AuthenticationService } from './authentication/authentication.service';
import { LoginComponent } from 'src/app/login/login.component'
import { LoginService } from './Services/LoginService/login.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HulluPay Login';
  
  

  constructor(private login:LoginService, public translate:TranslateService){
   

      translate.addLangs(['en','አማ','oro']);
      const lang:string='አማ'
      translate.setDefaultLang(lang);
      const browserLang = translate.getBrowserLang();
      translate.use(lang);
    
    }

    // changeLang(lang){

    // localStorage.setItem('lang', lang);

    // window.location.reload();

  //   this.translate.use(lang);

   //}


  }

  

  // logout(){
  //   this.login.logout();
  // }


 

