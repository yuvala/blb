import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quentry',
  templateUrl: './quentry.component.html',
  styleUrls: ['./quentry.component.scss']
})
export class QuentryComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }

}
