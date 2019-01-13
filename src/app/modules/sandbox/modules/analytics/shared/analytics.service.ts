import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }


  getChartType() {
    return [
      {
        name: 'animal-acrual',
        id: 321,
        chartType: 'line-chart'
      },
      {
        name: 'animal-gender',
        id: 654,
        chartType: 'line-chart'
      },
      {
        name: 'animal-disease',
        id: 789,
        chartType: 'line-chart'
      }
    ];
  }
}
