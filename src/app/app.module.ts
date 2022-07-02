import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyTweetsComponent } from './components/my-tweets/my-tweets.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostTweetComponent } from './components/post-tweet/post-tweet.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { ForgotPasswordComponent } from './components/UserActions/forgot-password/forgot-password.component';
import { LoginComponent } from './components/UserActions/login/login.component';
import { RegisterPageComponent } from './components/UserActions/register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    FooterComponent,
    MyTweetsComponent,
    NavbarComponent,
    PostTweetComponent,
    TweetComponent,
    ForgotPasswordComponent,
    LoginComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
