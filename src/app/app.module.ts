import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { appRouterProviders } from './app.route';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddPostComponent } from './add-post/add-post.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyDJN4N_HkUBjlZlR_2DAvesDJIErdNRS8s',
  authDomain: 'developmentblog-bee71.firebaseapp.com',
  databaseURL: 'https://developmentblog-bee71.firebaseio.com/',
  storageBucket: 'gs://developmentblog-bee71.appspot.com'
};

export const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    LoginComponent,
    SidebarComponent,
    AddPostComponent
  ],
  imports: [
    appRouterProviders,
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
