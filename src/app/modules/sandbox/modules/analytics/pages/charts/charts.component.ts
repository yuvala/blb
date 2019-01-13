import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: '[app-analytics-charts]',
  templateUrl: './charts.component.html',
  host: {'class': 'chart-container'}
})
export class AnalyticsChartsComponent implements OnInit {
  sub;
  id;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      console.log('frf');
      // In a real app: dispatch action to load the details here.
   });
  }

  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }
}
