import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataDownloadComponent } from './data-download/data-download.component';
import { DataUploadComponent } from './data-upload/data-upload.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReportComponent } from './report/report.component';
import { NewUploadComponent } from './new-upload/new-upload.component';

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
        path: '',
        component: NavbarComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            {
                path: 'data-upload',
                component: DataUploadComponent,
            },
            {
                path: 'data-download',
                component: DataDownloadComponent,
            },
            {
                path: 'report',
                component: ReportComponent,
            },
            {
                path: 'data-upload/new-upload',
                component: NewUploadComponent,
            },
        ]
    },
   
    {
    path:'**',
    redirectTo: 'login',
    }

];
