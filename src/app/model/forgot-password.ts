export class ForgotPassword {
    password!: string;
    confirmPassword!: string;
  
    constructor(confirmPassword: string, password: string) {
      this.confirmPassword = confirmPassword;
      this.password = password;
    }
  }