import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API: string = 'http://localhost:3000/api/v1/users';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.getToken()}`,
    }),
  };

  constructor(private readonly http: HttpClient) {}

  getToken() {
    const token = localStorage.getItem('x-access-token');
    return token?.split('"')[3];
  }

  getUser() {
    return this.http.get<User>(`${this.API}`, this.httpOptions);
  }

  create(data: User): Observable<User> {
    return this.http.post<User>(this.API, data);
  }
}
