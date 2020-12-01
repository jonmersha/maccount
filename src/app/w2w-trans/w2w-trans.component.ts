import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { TranslateService } from '@ngx-translate/core';
=======
import { ReceverInfomation } from '../model/ReceverInfo';
import { AccountService } from '../Services/account/account.service';
>>>>>>> 97e39707b5da1401f0714cd9d8670726e9062066

@Component({
  selector: 'app-w2w-trans',
  templateUrl: './w2w-trans.component.html',
  styleUrls: ['./w2w-trans.component.css']
})
export class W2wTransComponent implements OnInit {

<<<<<<< HEAD
  constructor(public translate:TranslateService){
    translate.addLangs(['en','አማ']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|አማ/) ? browserLang : 'en');

}
=======
  private reInfo:ReceverInfomation;

  constructor(private accountService:AccountService) { }
>>>>>>> 97e39707b5da1401f0714cd9d8670726e9062066

  ngOnInit(): void {
  }
  ckeckUsers(){
console.log("User Checkin Started")
this.accountService.getWalletUserInfo('0913153125').subscribe(
  data=>this.reInfo=data
  
  );
  }

}
