import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import * as firebase from 'firebase';

@Injectable()
export class UserService {
  user;
  roles;
  config = {
    apiKey: "AIzaSyDJN4N_HkUBjlZlR_2DAvesDJIErdNRS8s",
    authDomain: "developmentblog-bee71.firebaseapp.com",
    databaseURL: "https://developmentblog-bee71.firebaseio.com",
    projectId: "developmentblog-bee71",
    storageBucket: "developmentblog-bee71.appspot.com",
    messagingSenderId: "663278201828"
  };

  app: firebase.app.App;
  provider: firebase.auth.GoogleAuthProvider;
  constructor() {
    this.app = firebase.initializeApp(this.config);
    this.provider = new firebase.auth.GoogleAuthProvider();
    
  }

  signIn(user) {
    console.log('athenticated!');
    if (user) {
      (<any>window).user = user;
      this.user = user;
      this.app.database().ref(`/roles`).push({[user.uid]: true});
      this.app.database().ref(`/roles/${user.uid}`).on('value', snap => this.roles = snap.val());
    }
  }

  login() {
    console.log(this.app);
    console.log(this.provider);
    firebase.auth(this.app).signInWithRedirect(this.provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      
      this.user = user;
      // this.app.database().ref(`/roles`).push({[user.uid]: true});

      console.log(token)
      console.log(user)
   }).catch(function(error: any) {
      var errorCode = error.code;
      var errorMessage = error.message;
		
      console.log(error.code)
      console.log(error.message)
   });
    
    
    //.then(this.signIn.bind(this)).catch(e => { console.log('err!'); console.log(e)});
  }

  logout() {
    this.app.auth().signOut();
  }
}
