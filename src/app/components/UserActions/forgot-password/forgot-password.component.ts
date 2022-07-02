import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Login } from 'src/app/model/login';
import { ForgotPassword } from 'src/app/model/forgot-password';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserServiceService
  ) {}
  userName: string = '';
  password!: string;
  loginData!: Login;
  validForm: boolean = true;
  confirmPassword!: string;
  isPassword: boolean = false;
  passChange: boolean = false;
  err: any;
  ngOnInit(): void {}
  changePassword() {
    let password = new ForgotPassword(this.password,this.confirmPassword);
    this.userService.forgotPassword(password,this.userName).subscribe(
      (data) => {
       
        this.router.navigate(['/login']);
      },
      (error) => {
        this.passChange = true;
        this.err = error;
        console.log(this.err)
        if ((this.err.data = 'username not Present'))
          alert('Please Enter Valid Username');
      }
    );
  }
  onCheckPassword() {
    this.validForm = true;
    this.isPassword = false;
    if (this.password != this.confirmPassword) {
      this.isPassword = true;
      this.validForm = false;
    }
  }
  onpass() {
    if (this.password != null) {
      this.onCheckPassword();
    }
  }

  registerPage() {
    this.router.navigate(['/register']);
  }
}
