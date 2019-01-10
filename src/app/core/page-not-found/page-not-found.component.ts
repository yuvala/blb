import { Component, OnInit } from "@angular/core";
import { ActivatedRoute , Router  } from "@angular/router";

@Component({
    selector: 'app-not-found',
    templateUrl: './page-not-found.component.html',
    styles: []

})

export class PageNotFoundComponent implements OnInit {
    pathName: string;
  
    constructor(private route: ActivatedRoute, private router: Router) {}

    sendMeHome() {
        this.router.navigate(['']);
      }
  
    ngOnInit() {
        this.pathName = "Login";
    }
  }