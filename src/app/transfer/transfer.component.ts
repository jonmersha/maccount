import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(public translate:TranslateService) { 
    translate.addLangs(['en','አማ']);
      translate.setDefaultLang('en');
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|አማ/) ? browserLang : 'en');
  }

  ngOnInit(): void {
  }

}
