import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-w2b-trans',
  templateUrl: './w2b-trans.component.html',
  styleUrls: ['./w2b-trans.component.css']
})
export class W2bTransComponent implements OnInit {

  constructor(public translate:TranslateService) { 
    translate.addLangs(['en','አማ']);
      translate.setDefaultLang('en');
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|አማ/) ? browserLang : 'en');
  }

  ngOnInit(): void {
  }

}
