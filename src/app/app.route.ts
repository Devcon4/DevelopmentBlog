import { PostListRoutes } from './post-list/post-list.route';
import { LoginRoutes } from './login/login.route';
import { AdminRoutes } from './admin/admin.route';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
const routes: Routes = [
  ...PostListRoutes,
  ...LoginRoutes,
  ...AdminRoutes,
  {
    canActivate:[AuthGuard],
    path: '', redirectTo: 'login', pathMatch: 'full'
  }
];

export const appRouterProviders = RouterModule.forRoot(routes);
