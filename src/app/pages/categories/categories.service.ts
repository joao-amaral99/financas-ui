import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private readonly API: string = 'http://localhost:3000/api/v1/category';

  constructor(private readonly http: HttpClient) {}

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API);
  }

  createCategory(data: Category): Observable<Category> {
    return this.http.post<Category>(this.API, data);
  }
}
