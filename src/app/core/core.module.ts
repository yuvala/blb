import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ApiService } from './services/api.service';
import { LoggerService } from './services/logger.service';
import { Page404Component } from './page-404/page404.component';

@NgModule({
    imports: [
        HttpClientModule,
        RouterModule,
        CommonModule
    ],
    providers: [
        //  { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
        ApiService,
        { provide: ErrorHandler, useClass: LoggerService },
    ],
    declarations: [
        Page404Component
    ]
})
export class CoreModule { }
