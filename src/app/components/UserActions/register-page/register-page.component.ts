import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Users } from 'src/app/model/users';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  firstName!: string;
  lastName!: string;
  email!: string;
  loginId!: string;
  password!: string;
  confirmPassword!: string;
  contactNumber!: string;
  usersList: Users[] = [];
  validForm: boolean = true;
  isEmail: boolean = false;
  isLoginId: boolean = false;
  isUsername: boolean = false;
  isPassword: boolean = false;
  errorMessage: any;
  currentStatus!: String;
  res: any;
  constructor(
    private router: Router,
    private userService: UserServiceService
  ) {}

  ngOnInit(): void {}
  register() {
    let user = new Users(
      this.firstName,
      this.lastName,
      this.email,
      this.loginId,
      this.password,
      this.confirmPassword,
      this.contactNumber
    );
    this.userService.registserUser(user).subscribe((data) => {
      this;
    });
  }
  onCheckUsername() {}

  onpass() {
    if (this.password != null) {
      this.onCheckPassword();
    }
  }
  onCheckPassword() {
    this.validForm = true;
    this.isPassword = false;
    if (this.password != this.confirmPassword) {
      this.isPassword = true;
      this.validForm = false;
    }
  }

  div1: boolean = false;
  registerUserConfrim() {
    this.div1 = true;
  }
}
