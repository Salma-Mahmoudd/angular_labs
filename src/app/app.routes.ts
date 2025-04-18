import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ErrorComponent } from './components/error/error.component';
import { AddUserComponent } from './components/add-user/add-user.component';

export const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: AddUserComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: '**', component: ErrorComponent },
];
