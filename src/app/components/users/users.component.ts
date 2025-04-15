import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterModule],
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
    phone: string;
  }[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    // console.log(this.userService.getUsers());
    this.userService.getUsers().subscribe({
      next: (data: any) => {
        this.users = data.map((user: any) => ({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
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
