import { Component, OnInit } from '@angular/core';


@Component({
  selector: '[app-analytics-dashboard]',
  templateUrl: './dashboard.component.html',
  host: {'class': 'd-container'}
})
export class AnalyticsDashboardComponent implements OnInit {
  theme = 'dark';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  constructor() { }

  ngOnInit() {
  }

}
