import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReceverInfomation } from 'src/app/model/ReceverInfo';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url: string = 'https://hullupay.herokuapp.com/customer_info';

  constructor(private http:HttpClient) { }
  getWalletUserInfo(number:string):Observable<ReceverInfomation>{
  const  req={
      "customer_number": number,
      "type": "wallet"
  }
  return this.http.post<ReceverInfomation>(this.url,req);

  }
  getbankUserInfo(number:string){
    
  }
  sendMoneyWalletToWallet(){}
}
