import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  constructor(private user: UserServiceService, private router: Router) {}
  get: any;
  authtoken: any;
  ngOnInit() {
    this.authtoken = localStorage.getItem('authtoken');
    if (this.authtoken) {
      this.user.getAllUsers(this.authtoken).subscribe(
        (response) => {
          this.get = response;
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }
}
