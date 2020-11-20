import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication/authentication.service';
import { SignInData } from '../model/signInData';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isFormInvalid = false;
  areCredentialsInvalid =false;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm) {
    if (!signInForm.valid){
      this.isFormInvalid = true;
      this.areCredentialsInvalid = false;
      return;

    }
    this.checkCredentials(signInForm);
    //console.log(signInForm.value);
    const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
    this.authenticationService.authenticate(signInData)
  }
  private checkCredentials(signInForm: NgForm){
    const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
    if(!this.authenticationService.authenticate(signInData))
    this.isFormInvalid=false;
    this.areCredentialsInvalid = true;
  }
  cambiar_login() {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
    document.getElementById('cont_form_login').style.display = "block";
    document.getElementById('cont_form_sign_up').style.opacity = "0";               
  
   setTimeout(function(){  
     document.getElementById('cont_form_login').style.opacity = "1"; },400);  
    
   setTimeout(function(){    
    document.getElementById('cont_form_sign_up').style.display = "none";},200);  
}
                      
  cambiar_sign_up() {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
    document.getElementById('cont_form_sign_up').style.display = "block";
    document.getElementById('cont_form_login').style.opacity = "0";
    
    setTimeout(function(){  
      document.getElementById('cont_form_sign_up').style.opacity = "1";},100);  
  
    setTimeout(function(){   
      document.getElementById('cont_form_login').style.display = "none"; },400);  
  
  } 

  ocultar_login_sign_up()
  {
  
    document.querySelector('.cont_forms').className = "cont_forms";  
    document.getElementById('cont_form_sign_up').style.opacity = "0";               
    document.getElementById('cont_form_login').style.opacity = "0"; 
    
    setTimeout(function()
    {
      document.getElementById('cont_form_sign_up').style.display = "none";
      document.getElementById('cont_form_login').style.display = "none";
    },500);  
      
  }	
}
