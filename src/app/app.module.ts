import {AlertModule} from 'ng2-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ROUTES} from './app.routing'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginService } from './_services/loginService';
import { AlertService } from './_services/alert.service';
import { AuthGuard } from './_services/auth-guard.service';
// import {TaskService} from './_services/task.service'

import { StorageService } from './_services/localStorage.service';

import { FormGroup, FormControl, FormBuilder, Validator, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './task/addtask.component';
import { LockerModule } from 'angular2-locker';
import { RouterModule } from '@angular/router';

import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
// import { PagerService } from './_services/pager.service';
import {Ng2PaginationModule} from 'ng2-pagination';

@NgModule({
  declarations: [
    AppComponent, 

    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    IndexComponent,
    NavigationComponent,
    HeaderComponent,
    TaskComponent,
    AddTaskComponent,
    
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AlertModule.forRoot(),
    LockerModule,
    RouterModule.forRoot(ROUTES, { useHash: false }),
    Ng2FilterPipeModule,
    Ng2PaginationModule
    
  ],
  providers: [
    LoginService,
    AlertService,
    AuthGuard,
    StorageService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
