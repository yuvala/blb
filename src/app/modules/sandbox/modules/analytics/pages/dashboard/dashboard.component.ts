import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: '[app-analytics-dashboard]',
  templateUrl: './dashboard.component.html',
  // tslint:disable-next-line:use-host-property-decorator
  host: {'class': 'd-container'}
})
export class AnalyticsDashboardComponent implements OnInit {
  theme = 'dark';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  constructor(private router: Router) {
  console.log('ddd');
    this.router;
  }

  ngOnInit() {
  }

}
