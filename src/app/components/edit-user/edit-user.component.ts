import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
})
export class EditUserComponent {
  userId = '';
  user: any;

  constructor(
    activatedRoute: ActivatedRoute,
    private userService: UsersService,
    private router: Router
  ) {
    this.userId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.userService.getUserById(this.userId).subscribe({
      next: (user) => {
        this.user = user;
      },
      error: (error) => {
        console.error('Error fetching user:', error);
      },
    });
  }

  updateUser(){
    this.userService.updateUser(this.userId, this.user).subscribe({
      next: (response) => {
        console.log('User updated successfully:', response);
        alert('User updated successfully!');
        this.router.navigate(['/users']);
      },
      error: (error) => {
        console.error('Error updating user:', error);
        alert('Error updating user. Please try again.');
      },
    });
  }
}
