import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ApiService } from './services/api.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule
    ],
    providers: [
        //   { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
        ApiService
    ],
    declarations: [
        PageNotFoundComponent
    ]
})
export class CoreModule { }
