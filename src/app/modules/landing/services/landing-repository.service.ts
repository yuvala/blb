import { Injectable } from '@angular/core';
import { ApiService } from './../../../core/services/api.service';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class LandingRepositoryService {

    constructor(private api: ApiService) { }

    authorization(credentials) {
        return this.api.post('users/login', credentials).pipe(
            map((r: { firstName: string; lastName: string; }) => {
                console.log(r);
                return `${r.firstName} ${r.lastName}`;
            }),
            catchError((err) => {
                // console.log(err);
                return throwError(err.status);
            })
        );
    }
}
