import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API: string = 'http://localhost:3000/api/v1/users';
  private readonly API_LOGIN: string = 'http://localhost:3000/api/auth/login';

  constructor(private http: HttpClient) {}

  create(data: User): Observable<User> {
    return this.http.post<User>(this.API, data);
  }

  login(data: Partial<User>): Observable<User> {
    return this.http.post<User>(this.API_LOGIN, data);
  }
}
