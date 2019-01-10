import { Component, OnInit } from "@angular/core";
import { ActivatedRoute , Router  } from "@angular/router";

@Component({
    selector: 'app-page404',
    templateUrl: './page404.component.html',
    styles: []

})

export class Page404Component implements OnInit {
    pathName: string;
  
    constructor(private route: ActivatedRoute, private router: Router) {}

    sendMeHome() {
        this.router.navigate(['']);
      }
  
    ngOnInit() {
        this.pathName = "Login";
    }
  }