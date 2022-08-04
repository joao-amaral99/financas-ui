import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

// Modules
import { SignupModule } from './pages/signup/signup.module';
import { SigninModule } from './pages/signin/signin.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SigninModule,
    SignupModule,
  ],
  exports: [SidebarComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
