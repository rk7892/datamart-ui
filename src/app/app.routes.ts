import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent,        
    },
    {
        path:'signin',
        component: SigninComponent,
        
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
    path:'**',
    redirectTo: 'login',
    }

];
