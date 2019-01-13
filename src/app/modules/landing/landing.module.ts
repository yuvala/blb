import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';

import { LandingRepositoryService } from './services/landing-repository.service';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  imports: [
    SharedModule,
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
