import { Component, OnInit } from '@angular/core';
import { ReceverInfomation } from '../model/ReceverInfo';
import { AccountService } from '../Services/account/account.service';

@Component({
  selector: 'app-w2w-trans',
  templateUrl: './w2w-trans.component.html',
  styleUrls: ['./w2w-trans.component.css']
})
export class W2wTransComponent implements OnInit {

  private reInfo:ReceverInfomation;

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }
  ckeckUsers(){
console.log("User Checkin Started")
this.accountService.getWalletUserInfo('0913153125').subscribe(
  data=>this.reInfo=data
  
  );
  }

}
