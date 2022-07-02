import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ForgotPassword } from '../model/forgot-password';
import { Login } from '../model/login';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  baseUrl = 'http://beetles-tweetapp-backend.azurewebsites.net/api/v1.0/tweets';
  constructor(private http: HttpClient) {}

  getAllUsers(authtoken: string | null) {
    return this.http.get(
      'http://beetles-tweetapp-backend.azurewebsites.net/api/v1.0/tweets/users/all',
      {
        headers: { Authorization: `Bearer ${authtoken}` },
      }
    );
  }
  loginUser(user: Login) {
    return this.http.post<Login>(
      'http://beetles-tweetapp-backend.azurewebsites.net/api/v1.0/tweets/login',
      user
    );
  }
  forgotPassword(password: ForgotPassword, userName: string) {
    return this.http.post(
      'http://beetles-tweetapp-backend.azurewebsites.net/api/v1.0/tweets/' +
        userName +
        '/forgot',
      password,
      { responseType: 'text' }
    );
  }
  registserUser(user: Users) {
    return this.http.post<any>(
      'http://beetles-tweetapp-backend.azurewebsites.net/api/v1.0/tweets/register',
      user
    );
  }
}
