import { Injectable } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from './api.service';
// TODO: Remove pseudoDialog
export const pseudoDialog = (message: string) => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    element.style.position = 'absolute';
    element.style.top = '50%';
    element.style.left = '50%';
    element.style.width = '640px';
    element.style.marginLeft = '-320px';
    element.style.minHeight = '80px';
    element.style.marginTop = '-40px';
    element.style.background = 'red';
    element.style.color = 'yellow';
    element.style.padding = '10px';
    element.style.textAlign = 'center';
    element.innerText = message;
    const close = document.createElement('button');
    close.innerText = 'close';
    close.style.display = 'block';
    close.style.margin = '30px auto 0';
    close.onclick = function () {
        document.body.removeChild(element);
    };
    element.appendChild(close);
};
@Injectable()
export class LoggerService extends ErrorHandler {
    constructor(private api: ApiService) { super(); }
    handleError(error) {
        if (error instanceof HttpErrorResponse) {
            // Backend returns unsuccessful response codes such as 404, 500 etc.
            console.log('Backend returned status code: ', error.status);
            console.log('Response body:', error.message);
        } else if (error && error.message) {
            // A client-side or network error occurred.
            pseudoDialog(error.message);
            console.log('An error occurred:', error.message);
            console.log(error.stack);
            this.api.post('logger', {
                message: error.message,
                stack: error.stack
            }).subscribe(() => {});
        } else {
            // Unknow error
            console.log('Unknow error.');
        }
    }
}
