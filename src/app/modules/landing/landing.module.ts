import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';

import { LandingRepositoryService } from './services/landing-repository.service';

// import { SharedModule } from '../shared';

import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    // SharedModule,
    // LandingRepositoryService,
    LandingRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    RecoveryComponent
  ],
  providers: [
    // HomeAuthResolver
    LandingRepositoryService,
    LandingRoutingModule
  ]
})
export class LandingModule {}
