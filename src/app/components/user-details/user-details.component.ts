import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-details',
  imports: [],
  providers: [UsersService],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  userId = '';
  user: any;

  constructor(
    activatedRoute: ActivatedRoute,
    private userService: UsersService
  ) {
    this.userId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.userService.getUserById(this.userId).subscribe({
      next: (user) => {
        this.user = user;
        console.log('User details:', this.user);
      },
      error: (error) => {
        console.error('Error fetching user details:', error);
      },
      complete: () => {
        console.log('User details fetch complete');
      },
    });
  }
}
