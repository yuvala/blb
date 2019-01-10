import { ModuleWithProviders, NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';

import { AnalyticsModule } from './modules/analytics/analytics.module';

@NgModule({
  imports: [
    // SharedModule,
    AnalyticsModule
  ],
  declarations: [
    // AnyComponent,
  ],
  providers: [
    // AnyAuthResolver
  ]
})
export class QuentryModule {}
