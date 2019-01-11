import { Component, OnInit } from '@angular/core';
import { LandingRepositoryService } from './../../services/landing-repository.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isHobbit = true;
  constructor(private rep: LandingRepositoryService) { }
  generateError() {
    let data: { value: string } = {value: ''};
    data = undefined;
    console.log(data.value);
  }
  login() {
    this.rep.authorization({ username: this.isHobbit ? 'Admin' : 'Other', password: '1234' }).subscribe((fullname: string) => {
      console.log(fullname);
    }, (e) => {
      console.log('error', e);
    });
  }
  ngOnInit() {
    this.isHobbit = false;
    this.login();
  }

}
