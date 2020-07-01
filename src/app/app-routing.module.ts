import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/users/login/login.component';
import { RegisterComponent } from './modules/users/register/register.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
export const routes: Routes = [
  {
      path: '',
      component: LoginComponent,
      data: {
        title: 'Tigerspike-Login'
      }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Tigerspike-Register'
    }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Tigerspike-dashboard'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
