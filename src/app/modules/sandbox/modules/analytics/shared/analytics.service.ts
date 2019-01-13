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
        id: '11111-1111-1111',
        chartType: 'line-chart'
      },
      {
        name: 'animal-gender',
        id: '22222-2222-2222',
        chartType: 'line-chart'
      },
      {
        name: 'animal-disease',
        id: '33333-3333-3333',
        chartType: 'line-chart'
      }
    ];
  }
}
