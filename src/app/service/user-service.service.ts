import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ForgotPassword } from '../model/forgot-password';
import { Login } from '../model/login';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}

  getAllUsers(authtoken: string | null) {
    return this.http.get(environment.BASE_URL + 'users/all', {
      headers: { Authorization: `Bearer ${authtoken}` },
    });
  }
  loginUser(user: Login) {
    return this.http.post<Login>(environment.BASE_URL + 'login', user);
  }
  forgotPassword(password: ForgotPassword, userName: string) {
    return this.http.post(
      environment.BASE_URL + userName + '/forgot',
      password,
      { responseType: 'text' }
    );
  }
  registserUser(user: Users) {
    return this.http.post<any>(environment.BASE_URL + 'register', user);
  }
}
