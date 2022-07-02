import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { ForgotPasswordComponent } from './components/UserActions/forgot-password/forgot-password.component';
import { LoginComponent } from './components/UserActions/login/login.component';
import { RegisterPageComponent } from './components/UserActions/register-page/register-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostTweetComponent } from './components/post-tweet/post-tweet.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { MyTweetsComponent } from './components/my-tweets/my-tweets.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'post', component: PostTweetComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'myTweets', component: MyTweetsComponent},
  {
    path: 'navbar', component: NavbarComponent,
    children:[
      { path: 'allUsers', component: AllUsersComponent},
      { path: 'tweets', component: TweetComponent},
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
