import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AnalyticsService } from '../../shared/analytics.service';

@Component({
  selector: 'app-analytics-main',
  templateUrl: './main.component.html'
})
export class AnalyticsMainComponent implements OnInit {
  public analyticsCharts = [];
  selectChart (item) {
    console.log('seletcChart', item);
    this.router.navigate(['/sandbox/analytics/chart', item.id]);
  }
  constructor(private router: Router, private analyticsService: AnalyticsService) {

  }

  ngOnInit() {
    this.analyticsCharts = this.analyticsService.getChartType();
  }

}
