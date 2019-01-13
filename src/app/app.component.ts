import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blb';
  constructor() {
    // const rep = this.api.get('users/logout').pipe(
    //   map((r) => r)
    // );
    // const rep = this.api.post('users/login', { username: 'Admin', password: '1234' }).pipe(
    //   map((r) => r)
    // );
    // //
    // rep.subscribe((r) => {
    //   console.log(r);
    // });
  }
}
