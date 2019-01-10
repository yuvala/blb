
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalyticsMainComponent } from './pages/main/main.component';
import { AnalyticsDashboardComponent } from './pages/dashboard/dashboard.component';
import { AnalyticsChartsComponent } from './pages/charts/charts.component';

const routes: Routes = [
    { path: 'analytics', component: AnalyticsMainComponent, children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: AnalyticsDashboardComponent },
        { path: 'charts/:id', component: AnalyticsChartsComponent },
        { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]},
<<<<<<< HEAD
    ///ruslan 2
=======
>>>>>>> 83bd851efef2c8eee9cc21524e68d973e118fa3b
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
export class AnalyticsRoutingModule {}
