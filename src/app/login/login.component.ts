import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
// import { ILogin } from './login';
import { LoginService } from '../_services/loginService';
import { AlertService } from '../_services/alert.service';
import { LocalStorageModule } from 'angular-2-local-storage';


@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]

})
export class LoginComponent implements OnInit {
  
loginForm : FormGroup;
loading = false;
 returnUrl: string;

  constructor(fb: FormBuilder,
   private route: ActivatedRoute,
   private routerLink : Router,
   private _auth:LoginService,
   private alertService : AlertService
   ) 
   { 
     this.loginForm = fb.group({
      'email' : ["", Validators.required],
      'password': ["", Validators.required],
      
    })
   }

  ngOnInit() {

      
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
 
  onSubmitModelBased()
   {
    debugger;
     console.log("Login-based form submitted");
    console.log(this.loginForm);
    this._auth.login(this.loginForm.value);

    this.routerLink.navigate(['dashboard']);

  }

}
