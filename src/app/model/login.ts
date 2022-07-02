export class Login {
  username!: string;
  password!: string;
  token?: string;

  constructor(userId: string, password: string) {
    this.username = userId;
    this.password = password;
  }
  
}
