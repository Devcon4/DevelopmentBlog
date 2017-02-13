import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Injectable()
export class UserService {
  user;
  roles;
  constructor(private fb: FirebaseService) {
    fb.app.auth().onAuthStateChanged(u => {
      if (u) {
        (<any>window).user = u;
        console.log('athenticated!');
        this.user = u;
        fb.app.database().ref(`/roles/${u.uid}`).on('value', snap => this.roles = snap.val());
      }
    });
  }

  login() {
    this.fb.app.auth().signInWithRedirect(this.fb.provider);
  }

  logout() {
    this.fb.app.auth().signOut();
  }
}
