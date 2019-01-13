import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LandingModule } from './modules/landing/landing.module';
import { SandboxModule } from './modules/sandbox/sandbox.module';

import { CoreModule } from './core/core.module';
 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    LandingModule,
    SandboxModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
