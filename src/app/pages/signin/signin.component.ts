import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { User } from 'src/app/models/user';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
  });

  isLoading: boolean = false;

  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly notifier: NotifierService
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('finapp.token');
    if (token) {
      this.isLoading = true;
      this.authService.refreshToken().subscribe({
        next: (response: any) => {
          localStorage.setItem('finapp.token', response.token);
          this.isLoading = false;
        },
        error: (error) => {
          localStorage.clear();
          this.isLoading = false;
        },
      });
    }
  }

  onSubmit(): void {
    this.authService.login(this.form.value).subscribe({
      next: (response: any) => {
        localStorage.setItem('finapp.token', response.token);
        this.router.navigate(['/home']);
        this.form.reset();
      },
      error: (response) => {
        this.notifier.notify('error', response.error.message);
      },
    });
  }
}
