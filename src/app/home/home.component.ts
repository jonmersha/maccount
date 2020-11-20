import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(public authenticationService:AuthenticationService){

  }

  logout(){
    this.authenticationService.logout();
  }

  ngOnInit(): void {
  }


}
