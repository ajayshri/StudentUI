import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import{RegisterComponent} from './register/register.component';
import{ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import{IndexComponent} from './index/index.component';
import{NavigationComponent} from './navigation/navigation.component';
import{HeaderComponent} from './header/header.component';
import{TaskComponent} from './task/task.component';
import{AddTaskComponent} from './task/addtask.component';
import { AuthGuard } from './_services/auth-guard.service';


export const ROUTES: Routes = [   

      { path: '', redirectTo: 'login', pathMatch: 'full' },   
      { path: 'login', component: LoginComponent },
      { path: 'register',component:RegisterComponent},
      { path:'forgotpassword',component:ForgotpasswordComponent},
      { path:'dashboard',component:DashboardComponent},
      { path: 'task', component:TaskComponent},
      { path: 'addtask', component: AddTaskComponent},
      { path: 'addtask/:id', component: AddTaskComponent},
      
//       { path: 'Home', component: DashboardComponent,
//           children: [     
//       { path: 'Index', component: IndexComponent },
//       { path: 'task', component:TaskComponent},
//       { path:'task/addtask',component:AddTaskComponent},
//        { path: '', redirectTo: 'Index', pathMatch: 'full' },
    
//     ]
//   },
//    

//  {path:'Home/task',component:TaskComponent},

    // {path:'Home/index',component:IndexComponent},
    


    // otherwise redirect to login
    // { path: '**', redirectTo: 'login' }
];

