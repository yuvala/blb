import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  generateError() {
    let data: { value: string } = {value: ''};
    data = undefined;
    console.log(data.value);
  }
  ngOnInit() {}

}
