import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private URL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.URL);
  }

  getUserById(id: number) {
    return this.http.get(`${this.URL}/${id}`);
  }

  createUser(user: any) {
    return this.http.post(this.URL, user);
  }

  updateUser(id: number, user: any) {
    return this.http.put(`${this.URL}/${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.URL}/${id}`);
  }
}
