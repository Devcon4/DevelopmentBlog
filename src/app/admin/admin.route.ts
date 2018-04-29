import { AdminComponent } from './admin.component';
import { Routes } from '@angular/router';
import { UserListRoutes } from '../user-list/user-list.routes';
import { AuthGuard } from '../auth-guard.service';
import { AdminGuardService } from '../admin-guard.service';

export let AdminRoutes: Routes = [
  {
    canActivate: [AuthGuard, AdminGuardService],
    children: [
        ...UserListRoutes,
        { path: '', redirectTo: 'users', pathMatch: 'full' }
    ],
    path: 'admin',
    component: AdminComponent
  }
];
