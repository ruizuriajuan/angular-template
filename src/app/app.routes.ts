import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NotPageFoundComponent } from './pages/notpagefound/notpagefound.component';
import { PagesComponent } from './pages/pages.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';

export const routes: Routes = [
    {
        path: 'dashboard', component: PagesComponent,
        children: [
            { path: '.', component: DashboardComponent, data:{titulo:'Dashboard'} },
            { path: 'progress', component: ProgressComponent, data:{titulo:'Progress'} },
            { path: 'account-settings', component: AccountSettingsComponent, data:{titulo:'Account Settings'} },
            { path: 'rxjs', component: RxjsComponent, data:{titulo:'Rxjs'} },
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NotPageFoundComponent }
];
