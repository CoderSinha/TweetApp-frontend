export class Users {
  firstName!: string;
  lastName!: string;
  email!: string;
  loginId!: string;
  password!: string;
  confirmPassword!: string;
  contactNumber!: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    loginId: string,
    password: string,
    confirmPassword: string,
    contactNumber: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.loginId = loginId;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.contactNumber = contactNumber;
  }
}
