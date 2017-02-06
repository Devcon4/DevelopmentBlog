import { PostListComponent } from './post-list.component';
import { Routes } from '@angular/router';
import { AuthGuard } from '../auth-guard.service';

export let PostListRoutes: Routes = [
  {
    canActivate: [AuthGuard],
    path: 'posts',
    component: PostListComponent
  }
];
