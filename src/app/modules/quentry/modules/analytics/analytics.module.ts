import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AnalyticsMainComponent } from './pages/main/main.component';
import { AnalyticsDashboardComponent } from './pages/dashboard/dashboard.component';
import { AnalyticsChartsComponent } from './pages/charts/charts.component';
import { FormsModule } from '@angular/forms';

// import { SharedModule } from '../shared';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { SharedComponent } from './shared/shared.component';
import { AnalyticsHeaderComponent } from './shared/analytics-header/analytics-header.component';

@NgModule({
  imports: [
    // SharedModule,
    AnalyticsRoutingModule,
    FormsModule
  ],
  declarations: [
    AnalyticsMainComponent,
    AnalyticsDashboardComponent,
    AnalyticsChartsComponent,
    SharedComponent,
    AnalyticsHeaderComponent,

  ],
  providers: [
    // HomeAuthResolver
  ]
})
export class AnalyticsModule {}
