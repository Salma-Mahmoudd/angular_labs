import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserItemComponent } from '../user-item/user-item.component';

@Component({
  selector: 'app-users',
  imports: [UserItemComponent],
  providers: [UsersService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users: {
    id: number;
    name: string;
    username: string;
    email: string;
  }[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (data: any) => {
        this.users = data.map((user: any) => ({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
        }));
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Request completed');
      },
    });
  }
}
