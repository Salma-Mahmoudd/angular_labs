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

  getUserById(id: string) {
    return this.http.get(`${this.URL}/${id}`);
  }

  createUser(user: any) {
    return this.http.post(this.URL, user);
  }

  updateUser(id: string, user: any) {
    return this.http.put(`${this.URL}/${id}`, user);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.URL}/${id}`);
  }
}
