import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../categories/categories.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    value: [null, [Validators.required]],
    date: ['', [Validators.required]],
    category: ['', [Validators.required]],
    description: [''],
  });

  categories: any = [];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getAllCategories().subscribe({
      next: (response) => this.categories.push(response),
      error: (error) => console.log(error),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
