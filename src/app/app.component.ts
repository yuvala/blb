import { Component } from '@angular/core';
import { ApiService } from './core/services/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blb';
  constructor(private api: ApiService) {
    const rep = this.api.get('initdata.json').pipe(
      map((r) => r)
    );
    rep.subscribe((r) => {
      console.log(r);
    });
  }
}
