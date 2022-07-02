import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login';
import { UserServiceService } from '../../../service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserServiceService
  ) {}
  userId: string = '';
  password!: string;
  loginData!: Login;
  inValidLogin: boolean = false;
  check: string = 'run';
  get: any;
  err: any;
  ngOnInit(): void {}
  forgotPassword() {
    this.router.navigate(['/forgotPassword']);
  }
  validateLogin() {
    let login = new Login(this.userId, this.password);
    this.userService.loginUser(login).subscribe(
      (response) => {
        this.get = response;
        if (response?.token) localStorage.setItem('authtoken', response.token);
        this.router.navigate(['/post/']);
        localStorage.setItem('userId', this.userId);
      },
      (error) => {
        this.err = error;
        console.table(error);
        if ((this.err.data = 'Login Failed')) this.inValidLogin = true;
      }
    );
  }

  getUserId() {
    return localStorage.getItem('userId');
  }

  registerPage() {
    this.router.navigate(['/register']);
  }
}
