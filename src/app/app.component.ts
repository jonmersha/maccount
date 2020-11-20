import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
import { LoginComponent } from 'src/app/login/login.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HulluPay Login';
  
  

  constructor(public authenticationService:AuthenticationService){

  }

  logout(){
    this.authenticationService.logout();
  }


 
}
