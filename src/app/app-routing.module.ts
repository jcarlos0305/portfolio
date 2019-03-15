import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ModuleWithProviders } from '@angular/core';
import { LoggedInGuardService } from './services/logged-in-guard.service';
import { SigninComponent } from './components/signin/signin.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'signin', component: SigninComponent },
    { path: 'dashboard', component: DashboardComponent,canActivate: [LoggedInGuardService] }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
