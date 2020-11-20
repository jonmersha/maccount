import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../model/customer';
import { SignInData } from '../model/signInData';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockedUser = new SignInData('salemtew16@yahoo.com', '123456');
  IsAuthenticated = false;
  customer: Customer;
  
 
  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    if(this.checkCreadentials(signInData)){
      this.IsAuthenticated =true;
      this.router.navigate(['home'])
      return true;
    }
    this.IsAuthenticated = false;
    return false;
  }
  private checkCreadentials(signInData: SignInData): boolean {
    return this.checkEmail(signInData.getEmail()) 
    && this.checkPassword(signInData.getPassword());

  }

  private checkEmail(email: string): boolean{
    return email === this.mockedUser.getEmail();

  }
  private checkPassword(password: string): boolean{
    return password === this.mockedUser.getPassword();
  }

  logout(){
    this.IsAuthenticated = false;
    this.router.navigate([''])
  }

  register(user){
  
    return this.IsAuthenticated = false;
  }

  //signUp():any{        
   //   this.http.post<Customer>('https://jsonplaceholder.typicode.com/posts',{ title: 'Angular POST Request Example' }).subscribe(data => {
     //     this.customer = data;
     // })
   //return Customer;
  //}
}

