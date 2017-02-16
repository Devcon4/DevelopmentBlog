import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import * as firebase from 'firebase';

@Injectable()
export class UserService {
  user;
  roles;

  constructor(private fb: FirebaseService) { }

  signIn(user) {
    console.log('athenticated!');
    if (user) {
      (<any>window).user = user;
      this.user = user;
      this.fb.app.database().ref(`/roles/${user.uid}`).on('value', snap => this.roles = snap.val());
    }
  }

  login() {
    console.log(this.fb.app);
    console.log(this.fb.provider);
    firebase.auth(this.fb.app).signInWithRedirect(this.fb.provider).then(this.signIn.bind(this)).catch(e => { console.log('err!'); console.log(e)});
  }

  logout() {
    this.fb.app.auth().signOut();
  }
}
