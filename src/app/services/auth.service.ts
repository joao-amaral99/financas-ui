import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_LOGIN: string = 'http://localhost:3000/api/auth/login';
  private readonly API_TOKEN: string =
    'http://localhost:3000/token/refresh-token';

  constructor(private http: HttpClient) {}

  login(data: Partial<User>): Observable<User> {
    return this.http.post<User>(this.API_LOGIN, data);
  }

  public composeHeaders() {
    const token = localStorage.getItem('finapp.token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return headers;
  }

  refreshToken() {
    return this.http.post(`${this.API_TOKEN}`, null, {
      headers: this.composeHeaders(),
    });
  }
}
