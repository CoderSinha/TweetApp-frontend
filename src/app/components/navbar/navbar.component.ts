import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetService } from 'src/app/service/tweet.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  authtoken: any;
  name!: string;
  isLogin!: boolean;
  constructor(private tweetservice: TweetService,private router: Router) {}

  ngOnInit(): void {
    this.authtoken = localStorage.getItem('authtoken');
    this.name = (localStorage.getItem('userId') || '{}');
  }
  
  openTweets() {
    if (this.authtoken) {
      this.router.navigate(['navbar/tweets']);
    } else {
      this.router.navigate(['/login']);
    }
  }
  showAllUsers() {
    if (this.authtoken) {
      this.router.navigate(['navbar/allUsers']);
    } else {
      this.router.navigate(['/login']);
    }
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/logout']);
  }
  postTweet() {
    if (this.authtoken) {
      this.router.navigate(['/post']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
