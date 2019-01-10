import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';

// import { SharedModule } from '../shared';

import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  imports: [
    // SharedModule,
    LandingRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    RecoveryComponent
  ],
  providers: [
    // HomeAuthResolver
  ]
})
export class LandingModule {}
