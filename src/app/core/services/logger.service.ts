import { Injectable } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class LoggerService extends ErrorHandler {
    constructor() { super(); }
    handleError(error) {
        console.log(typeof error);
        if (error instanceof HttpErrorResponse) {
            // Backend returns unsuccessful response codes such as 404, 500 etc.
            console.log('Backend returned status code: ', error.status);
            console.log('Response body:', error.message);
        } else {
            // A client-side or network error occurred.
            console.log('An error occurred:', error.message);
        }
        console.log(error);
        console.log('************************************\n\n\n');
        // setTimeout(() => {
        //     // console.clear();
        //     console.log(error);
        //     console.log(error.message);
        //     console.log(error.stack);
        // }, 2000);
    }
}
