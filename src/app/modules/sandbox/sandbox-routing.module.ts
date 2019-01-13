
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SandboxComponent} from './sandbox.component';
import {AsideMenuComponent} from './shared/aside-menu/aside-menu.component';
import {AnalyticsDashboardComponent} from './modules/analytics/pages/dashboard/dashboard.component';
import { PatientsComponent } from './modules/patients/patients.component';
import { ApplicationsComponent } from './modules/applications/applications.component';
import { AnalyticsMainComponent } from './modules/analytics/pages/main/main.component';
import { AnalyticsChartsComponent } from './modules/analytics/pages/charts/charts.component';
import { MainComponent } from './modules/patients/pages/main/main.component';


export const SANDBOX_ROUTES: Routes = [
  {
    path: 'sandbox',
    component: SandboxComponent,
    children: [
      {
        path: '',
        component: AsideMenuComponent,
        outlet: 'sidemenu'
      },
      {
        path: 'analytics',
        children:[
          {
            path:'',
            component: AnalyticsMainComponent,
            children:[
              {
                path:'dashboard',
                component: AnalyticsDashboardComponent
              },
              {
                path:'chart',
                component: AnalyticsChartsComponent
              }
            ]
          }
        ]
      },
      {
        path: 'patients',
        children:[
          {
            path:'',
            component: MainComponent,
            children:[

            ]
          }
        ]
      },
      {
        path: 'applications',
        component: ApplicationsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(SANDBOX_ROUTES)],
  exports: [RouterModule]
})
export class SandboxRoutingModule {}
