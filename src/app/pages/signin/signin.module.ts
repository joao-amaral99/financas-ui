import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components
import { SigninComponent } from './signin.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  declarations: [SigninComponent],
  exports: [],
})
export class SigninModule {}
