import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ApiService } from './services/api.service';
import { Page404Component } from './page-404/page404.component';
=======
import { CommonModule } from '@angular/common';

import { ApiService } from './services/api.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
>>>>>>> 83bd851efef2c8eee9cc21524e68d973e118fa3b

@NgModule({
    imports: [
        HttpClientModule,
<<<<<<< HEAD
        RouterModule,
=======
>>>>>>> 83bd851efef2c8eee9cc21524e68d973e118fa3b
        CommonModule
    ],
    providers: [
        //   { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
        ApiService
    ],
    declarations: [
<<<<<<< HEAD
        Page404Component
=======
        PageNotFoundComponent
>>>>>>> 83bd851efef2c8eee9cc21524e68d973e118fa3b
    ]
})
export class CoreModule { }
