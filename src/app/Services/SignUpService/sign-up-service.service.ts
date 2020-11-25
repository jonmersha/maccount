
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'})}
@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService implements OnInit {

  constructor(private http: HttpClient,private router: Router,) { }
  url: any = 'https://hullupay.herokuapp.com/cr_acc';
  json;
  ngOnInit(){}
  //CustmId:String;
  
  SignUp(customerData:JSON)
  {
   this.json=JSON.stringify(customerData)
   //alert(this.json);
  //   let CustemData=
  // {
  //   'phoneNumber':this.json.phoneNumber,
  //   'userName':customerData.stringify,
  //   'password':customerData.,
  //   'firstName':customerData.firstName,
  //   'middleName':customerData.middleName,
  //   'lastName':customerData.lastName,
  //   'maritalStatus':customerData.maritalStatus,
  //   'gender':customerData.gender,
  //   'motherFullName':customerData.motherFullName,
  //   'emailId':customerData.emailId,
  //   'birthDate': customerData.birthDate
  // }
    //alert(JSON.stringify(CustemData));  
    this.http.post(this.url, this.json).subscribe({  next:data =>
      { 
       
    //    // console.log(data.json.test()) ;
         alert(JSON.stringify(data));
        
      
        
     //         //this.errorMessage = error.message;
       //console.error('There was an error!', error);
     //        // this.noMatch="Invalid user or password"
        
     } 
     });
  
  }

}
