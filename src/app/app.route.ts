import { PostListRoutes } from './post-list/post-list.route';
import { LoginRoutes } from './login/login.route';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  ...PostListRoutes,
  ...LoginRoutes,
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }
];

export const appRouterProviders = RouterModule.forRoot(routes);
