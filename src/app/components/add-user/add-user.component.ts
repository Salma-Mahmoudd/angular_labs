import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [FormsModule],
  providers: [UsersService],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent {
  newUser = {
    name: '',
    username: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      zipcode: '',
    },
    company: {
      name: '',
    },
    website: '',
  };

  constructor(private userService: UsersService, private router: Router) {}

  addUser() {
    this.userService.createUser(this.newUser).subscribe({
      next: (response) => {
        console.log('User added successfully:', response);
        alert('User added successfully!');
        this.router.navigate(['/users']);
      },
      error: (error) => {
        console.error('Error adding user:', error);
        alert('Error adding user. Please try again.');
      },
    });
  }
}
