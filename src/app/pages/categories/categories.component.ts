import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required]],
  });

  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly formBuilder: FormBuilder
  ) {}

  allCategories: Category[] = [];

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoriesService.getAllCategories().subscribe({
      next: (response) => (this.allCategories = response),
      error: (error) => console.log(error),
    });
  }

  onSubmit() {
    this.categoriesService.createCategory(this.form.value).subscribe({
      next: (response) => {
        this.allCategories.push(response);
        this.form.reset();
      },
      error: (error) => console.log(error),
    });
  }
}
