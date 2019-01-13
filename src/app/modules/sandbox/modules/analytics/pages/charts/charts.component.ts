import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-analytics-charts]',
  templateUrl: './charts.component.html',
  host: {'class': 'chart-container'}
})
export class AnalyticsChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
