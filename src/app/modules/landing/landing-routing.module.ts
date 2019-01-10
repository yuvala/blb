
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';

const routes: Routes = [
    //{ path: '', redirectTo: '/landing/login', pathMatch: 'full' },
    { path: 'landing', children: [
        { path: 'login', component: LoginComponent },
        { path: 'registration', component: RegistrationComponent },
        { path: 'recovery', component: RecoveryComponent },
        { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ]}
//   {
//     path: '',
//     component: LoginComponent,
//     // resolve: {
//     //   isAuthenticated: HomeAuthResolver
//     // }
//   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {}
