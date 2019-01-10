import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './core/page-404/page404.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing/login', pathMatch: 'full' },
  { path: 'not-found', component: Page404Component },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
