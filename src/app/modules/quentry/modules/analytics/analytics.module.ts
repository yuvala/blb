import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AnalyticsMainComponent } from './pages/main/main.component';
import { AnalyticsDashboardComponent } from './pages/dashboard/dashboard.component';
import { AnalyticsChartsComponent } from './pages/charts/charts.component'

// import { SharedModule } from '../shared';

import { AnalyticsRoutingModule } from './analytics-routing.module';

@NgModule({
  imports: [
    // SharedModule,
    AnalyticsRoutingModule
  ],
  declarations: [
    AnalyticsMainComponent,
    AnalyticsDashboardComponent,
    AnalyticsChartsComponent,
  ],
  providers: [
    // HomeAuthResolver
  ]
})
export class AnalyticsModule {}
