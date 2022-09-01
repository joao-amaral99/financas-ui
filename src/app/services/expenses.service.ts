import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  private readonly API: string = 'http://localhost:3000/api/v1/expenses';

  constructor(private readonly http: HttpClient) {}

  createExpense(data: any) {
    return this.http.post(`${this.API}`, data);
  }
}
