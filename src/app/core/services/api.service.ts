import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const constHeaders = { 'Content-Type': 'application/json' };
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ApiService {
//   private baseUrl = 'api';
  private baseUrl = 'assets';
  private headers: HttpHeaders = new HttpHeaders(constHeaders);
  constructor(private http: HttpClient) { }
  get<T>(controler: string, params = {}): Observable<T> {
    const uri = `${this.baseUrl}/${controler}`;
    return this.http.get<T>(uri, { params: params, headers: this.headers });
  }
//   post<T>(controler: string, params = {}): Observable<T> {
//     const uri = `${this.baseUrl}/${controler}`;
//     return this.http.post<T>(uri, params, { headers: this.headers });
//   }
//   delete(controler: string, id = 'undefined'): Observable<boolean> {
//     const uri = `${this.baseUrl}/${controler}/${id}`;
//     return this.http.delete<boolean>(uri, { headers: this.headers });
//   }
}
