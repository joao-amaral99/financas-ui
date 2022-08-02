import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';

// Modules
import { SignupModule } from './pages/signup/signup.module';
import { SigninModule } from './pages/signin/signin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SigninModule,
    SignupModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
