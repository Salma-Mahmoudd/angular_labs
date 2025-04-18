import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-item',
  imports: [RouterModule],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent {
  @Input() user: {
    id: number;
    name: string;
    username: string;
    email: string;
  } = {
    id: -1,
    name: '',
    username: '',
    email: ''
  };
}
