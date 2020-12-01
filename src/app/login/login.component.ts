import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { SignInData } from '../model/signInData';
import { UpperCasePipe } from '@angular/common';
import {LoginService} from '../Services/LoginService/login.service';
import { from } from 'rxjs';
import { MustMatch } from './MustMatch';
import { SignUpServiceService } from '../Services/SignUpService/sign-up-service.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  username: string = '';
  password: string = '';
  textbox:string='';
  // CustemData:
  // {
  //   'phoneNumber':String,
  //   'userName':String ,
  //   'password':String ,
  //   'firstName':String ,
  //   'middleName':String ,
  //   'lastName':String ,
  //   'maritalStatus':String ,
  //   'gender':String ,
  //   'motherFullName':String ,
  //   'emailId':String ,
  //   'birthDate': String
  // }
  registerForm: FormGroup;
  submitted = false;
  isUsernameValid: boolean = true;
  
  isFormInvalid = false;
  areCredentialsInvalid =false;
  constructor(private loginService: LoginService,private formBuilder: FormBuilder, private signupservice:SignUpServiceService, public translate:TranslateService) { 
    translate.addLangs(['en','አማ']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|አማ/) ? browserLang : 'en');
  }
   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }
   ngOnInit() 
   {
       this.registerForm = this.formBuilder.group({
           nationality: ['', Validators.required],
           username: ['', Validators.required],
           firstName: ['', Validators.required],
           middleName:['',Validators.required],
           lastName: ['', Validators.required],
           gender: ['', Validators.required],
           maritalStatus: ['', Validators.required],
           motherFullName:['', Validators.required],
           // validates date format yyyy-mm-dd
           dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
           email: ['', [Validators.required, Validators.email]],
           phone:['',[Validators.required ]],
           password: ['', [Validators.required, Validators.minLength(6)]],
           confirmPassword: ['', Validators.required],
           acceptTerms: [false, Validators.requiredTrue]
       }, {
           validator: MustMatch('password', 'confirmPassword')
           
       });
      //    console.log(this.registerForm['email'] ); 
 }
  validateUsername(): void {
    const pattern = RegExp(/^[\w-.]*$/);
    if (pattern.test(this.username)) {
      this.isUsernameValid = true;
    } else {
      this.isUsernameValid = false;
    }
  }
  onKey(event: any, type: string) {
   
    if (type === 'email' ) {
      this.username = event.target.value;
      this.validateUsername();
    } else if (type === 'password') {
      this.password = event.target.value;
    } 
    
  }
  onSubmit() {
    console.log('Loginpanched')
    this.loginService.login(this.username, this.password)
    // if (this.isUsernameValid) 
    //    this.loginService.login(this.username, this.password)
        
    //    else{
    //    this.textbox="Please enter valid username and password";
    //    }
  }
 
  sign_up()
  {
    
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    //  this.data=
    //  alert();
    // display form values on success
    this.signupservice.SignUp(this.registerForm.value);

  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
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
   // window.location.href ='src\app\login\signUp.html';
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
