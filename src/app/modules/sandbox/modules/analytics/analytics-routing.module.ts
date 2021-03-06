
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalyticsMainComponent } from './pages/main/main.component';
import { AnalyticsDashboardComponent } from './pages/dashboard/dashboard.component';
import { AnalyticsChartsComponent } from './pages/charts/charts.component';
import { AnalyticsHeaderComponent } from './shared/analytics-header/analytics-header.component';

const routes: Routes = [
    { path: 'analytics', component: AnalyticsMainComponent, children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: AnalyticsDashboardComponent },
        { path: 'charts/:id', component: AnalyticsChartsComponent },
        { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]},
    { path: 'analytics', component: AnalyticsHeaderComponent, outlet: 'topBar'}
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AnalyticsRoutingModule {}
