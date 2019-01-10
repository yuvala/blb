import { Component,OnInit } from   '@angular/core'


@Component({
    selector: 'app-page404',
    templateUrl: './page404.component.html',
    styleUrls: ['./page404.component.scss']
})

export class Page404Component implements OnInit {
    pathName: string;
    
    // constructor(private route: ActivatedRoute, private router: Router) {}
    constructor() { }
    ngOnInit() {
        this.pathName = "Login";
    }
}
