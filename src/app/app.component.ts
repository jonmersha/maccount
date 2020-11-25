import { Component } from '@angular/core';
//import { AuthenticationService } from './authentication/authentication.service';
import { LoginComponent } from 'src/app/login/login.component'
import { LoginService } from './Services/LoginService/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HulluPay Login';
  
  

  constructor(private login:LoginService){

  }

  // logout(){
  //   this.login.logout();
  // }


 
}
