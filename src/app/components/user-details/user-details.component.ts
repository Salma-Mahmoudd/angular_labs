import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  userId = 0;

  constructor(activatedRoute: ActivatedRoute) {
    // console.log('UserDetailsComponent initialized');
    // console.log('ActivatedRoute:', activatedRoute);
    // console.log('userId:', activatedRoute.snapshot.params['id']);
    this.userId = activatedRoute.snapshot.params['id'];
  }
}
