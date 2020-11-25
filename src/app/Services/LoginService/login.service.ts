import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  url: string = 'https://hullupay.herokuapp.com/login';
  IsAuthenticated = false;
 
  // errorSubject: any = new BehaviorSubject<any>(null);
   errorMessage: any 
   noMatch:string='';
  // userSubject: any = new BehaviorSubject<any>(null);
  // user: any = this.userSubject.asObservable();

  constructor(private http: HttpClient,private router: Router,) { }
  
  ngOnInit(){}

  logout(){
    this.IsAuthenticated=false;
    this.router.navigate([''])
   // this.login.logout();
  }  

  
  login(Username: string, Password: string): any
  {
   let rq={
          'phoneNumber':Username ,
          'password':   Password
          }
    this.http.post(this.url,  rq  ).subscribe({  next:data =>
    { 
     
       if (data['userName']!=null)
       {
        this.IsAuthenticated = true;
        this.router.navigateByUrl('home');
        return true;
       }
      else
      {
        this.IsAuthenticated= false;
        return false;
        
      } 
        
      },
      // error: error => {
      //     this.errorMessage = error.message;
          //console.error('There was an error!', error);
      //     this.noMatch="Invalid user or password"
      // }
      
    });
    
  //   isAuthenticated():boolean {
  //     if (sessionStorage.getItem('jwt')) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
   }
  
  
}
