import { ModuleWithProviders, NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';

import { AnalyticsModule } from './modules/analytics/analytics.module';
import {QuentryRoutingModule } from './quentry-routing.module';
import { QuentryComponent } from './quentry.component';
import { SharedComponent } from './shared/shared.component';
import { AsideMenuComponent } from './shared/aside-menu/aside-menu.component';
import { PatientsComponent } from './modules/patients/patients.component';
import { ApplicationsComponent } from './modules/applications/applications.component';
@NgModule({
  imports: [
    QuentryRoutingModule,
    AnalyticsModule
  ],
  declarations: [
    // AnyComponent,
  QuentryComponent,
    SharedComponent,
    AsideMenuComponent,
    PatientsComponent,
    ApplicationsComponent],
  providers: [
    // AnyAuthResolver
  ]
})
export class QuentryModule {}
