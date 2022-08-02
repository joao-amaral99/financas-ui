import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    name: [
      null,
      [Validators.required, Validators.minLength(3), Validators.maxLength(80)],
    ],
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
  });

  isLoading = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly notifier: NotifierService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.create(this.form.value).subscribe({
      next: () => {
        this.notifier.notify('success', 'Cadastrado com sucesso!');
        this.form.reset();
      },
      error: () =>
        this.notifier.notify('error', 'Error ao efetivar o cadastrar!'),
    });
  }

  verifyFieldIsValid(field: string) {
    return (
      this.form.get(field)?.invalid &&
      this.form.get(field)?.touched &&
      this.form.get(field)?.dirty
    );
  }

  applyCssError(field: string) {
    return {
      'has-error': this.verifyFieldIsValid(field),
      'has-feedback': this.verifyFieldIsValid(field),
    };
  }
}
