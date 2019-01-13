import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './core/page-404/page404.component';
import { SandboxComponent } from './modules/sandbox/sandbox.component';


// to be consider: today it is common whens   "**" redirect to home..     only in speciphic ocation its redirect to 404
export const ROOT_ROUTES: Routes = [
  // { path: '', redirectTo: '/landing/login', pathMatch: 'full' },
  // { path: 'page-404', component: Page404Component },
  // { path: '**', redirectTo: 'page-404' },


  { path: '', redirectTo: 'sandbox', pathMatch: 'full'},
  { path: 'sandbox', component: SandboxComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(ROOT_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
