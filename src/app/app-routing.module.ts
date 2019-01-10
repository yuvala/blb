import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { Page404Component } from './core/page-404/page404.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing/login', pathMatch: 'full' },
  { path: 'not-found', component: Page404Component },
  { path: '**', redirectTo: 'not-found' }
=======
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing/login', pathMatch: 'full' },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' }
>>>>>>> 83bd851efef2c8eee9cc21524e68d973e118fa3b
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
