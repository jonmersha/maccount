import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-b2b-trans',
  templateUrl: './b2b-trans.component.html',
  styleUrls: ['./b2b-trans.component.css']
})
export class B2bTransComponent implements OnInit {

  constructor(public translate:TranslateService) { 
    translate.addLangs(['en','አማ']);
    const lang:string='አማ'
    translate.setDefaultLang(lang);
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|አማ/) ? browserLang : lang);
  }
  

  ngOnInit(): void {
  }

  b2b_Submit(){
    
  }

  onReset(){

  }
}
