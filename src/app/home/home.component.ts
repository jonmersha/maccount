import { Component, OnInit } from '@angular/core';
import {LoginService} from '../Services/LoginService/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(public login:LoginService){

  }

  logout(){
    this.login.logout();
  }

  ngOnInit(): void {
  }


}
