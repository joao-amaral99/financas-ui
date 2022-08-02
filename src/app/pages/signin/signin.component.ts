import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';

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

  constructor(
    private readonly signupService: SignupService,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.signupService.login(this.form.value).subscribe({
      next: (response) => {
        console.log(response);
        this.form.reset();
      },
      error: (error) => console.log(error),
    });
  }
}
