import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(public af: AngularFire) { }

  ngOnInit() {
  }

  login() {
    this.af.database.list('posts').push({ text: 'login attempt'});
    console.log('login!');
    this.af.auth.login();
  }

  logout() {
    console.log('logout!');
    this.af.auth.logout();
  }

}
