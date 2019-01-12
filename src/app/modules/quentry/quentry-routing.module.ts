
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {QuentryComponent} from './quentry.component';
import {AsideMenuComponent} from './shared/aside-menu/aside-menu.component';
import {AnalyticsDashboardComponent} from './modules/analytics/pages/dashboard/dashboard.component';
import { PatientsComponent } from './modules/patients/patients.component';
import { ApplicationsComponent } from './modules/applications/applications.component';


export const QUENTRY_ROUTES: Routes = [
  {
    path: 'quentry',
    component: QuentryComponent,
    children: [
      {
        path: '',
        component: AsideMenuComponent,
        outlet: 'sidemenu'
      },
      {
        path: 'analytics',
        component: AnalyticsDashboardComponent
      },
      {
        path: 'patients',
        component: PatientsComponent
      },
      {
        path: 'applications',
        component: ApplicationsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(QUENTRY_ROUTES)],
  exports: [RouterModule]
})
export class QuentryRoutingModule {}
