import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
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
  user: any = [];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly categoriesService: CategoriesService,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getUsers();
  }

  getUsers() {
    this.userService.getUser().subscribe({
      next: (response) => (this.user = response),
      error: (error) => error.message,
    });
  }

  getCategories() {
    this.categoriesService.getAllCategories().subscribe({
      next: (response) => this.categories.push(response),
      error: (error) => error.message,
    });
  }

  onSubmit() {
    console.log(this.form.value);
    console.log(this.user[0].id);
  }
}
