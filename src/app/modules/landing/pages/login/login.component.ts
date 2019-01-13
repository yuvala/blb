import { Component, OnInit } from '@angular/core';
import { LandingRepositoryService } from './../../services/landing-repository.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isHobbit = true;
  public users = {
    current: 'Shelob',
    list: [
      'Frodo Baggins',
      'Saruman',
      'Shelob',
      'Durin\'s Bane'
    ]
  };
  constructor(private rep: LandingRepositoryService) { }
  generateError() {
    let data: { value: string } = {value: ''};
    data = undefined;
    console.log(data.value);
  }
  userSelect($event: string) {
    console.log($event);
    this.users.current = $event;
  }
  login() {
    this.rep.authorization({
      username: this.users.current === 'Frodo Baggins' ? 'Admin' : 'Other',
      password: '1234' })
      .subscribe((fullname: string) => {
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
