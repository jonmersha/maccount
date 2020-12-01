import { Component, OnInit } from '@angular/core';
import {LoginService} from '../Services/LoginService/login.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  //lang;

  constructor(public login:LoginService, public translate:TranslateService){
      translate.addLangs(['en','አማ']);
      const lang:string='አማ'
      translate.setDefaultLang(lang);
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|አማ/) ? browserLang : lang);

  }
    changeLang(lang){
    localStorage.setItem('lang', lang);
  //  window.location.reload();
    this.translate.use(lang);

    }

  logout(){
    this.login.logout();
  }

  ngOnInit(): void {
  }


}
