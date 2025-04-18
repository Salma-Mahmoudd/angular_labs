import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-item',
  imports: [RouterModule],
  providers: [UsersService],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css',
})
export class UserItemComponent {
  @Input() user: {
    id: string;
    name: string;
    username: string;
    email: string;
  } = {
    id: '',
    name: '',
    username: '',
    email: '',
  };
  @Output() userDeleted = new EventEmitter<string>();

  constructor(private usersService: UsersService) {}

  deleteUser() {
    if (confirm(`Are you sure you want to delete ${this.user.name}?`)) {
      this.userDeleted.emit(this.user.id);
      this.usersService.deleteUser(this.user.id).subscribe({
        next: () => {
          alert('User deleted successfully');
        },
        error: (err) => {
          alert('Failed to delete user');
          console.error(err);
        },
      });
    }
  }
}
