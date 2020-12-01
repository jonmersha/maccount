import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-b2w-trans',
  templateUrl: './b2w-trans.component.html',
  styleUrls: ['./b2w-trans.component.css']
})
export class B2wTransComponent implements OnInit {

  constructor(public translate:TranslateService){
    translate.addLangs(['en','አማ']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|አማ/) ? browserLang : 'en');

}

  ngOnInit(): void {
  }

}
