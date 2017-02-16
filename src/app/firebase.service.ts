import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

  firebaseConfig = {
    apiKey: "AIzaSyDJN4N_HkUBjlZlR_2DAvesDJIErdNRS8s",
    authDomain: "developmentblog-bee71.firebaseapp.com",
    databaseURL: "https://developmentblog-bee71.firebaseio.com",
    storageBucket: "developmentblog-bee71.appspot.com",
    messagingSenderId: "663278201828"
  };

  app: firebase.app.App;
  provider: firebase.auth.GoogleAuthProvider;
  constructor() {
    this.app = firebase.initializeApp(this.firebaseConfig);
    this.provider = new firebase.auth.GoogleAuthProvider();
    
  }
}
