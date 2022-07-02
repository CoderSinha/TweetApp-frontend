import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetService } from 'src/app/service/tweet.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
})
export class TweetComponent implements OnInit {
  constructor(private tweet: TweetService, private router: Router) {}
  get: any;
  authtoken: any;
  ngOnInit() {
    this.authtoken = localStorage.getItem('authtoken');
    if (this.authtoken) {
      this.tweet.getAllTweets(this.authtoken).subscribe(
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
  commentOnTweet(){
    alert("You commented on a post");
  }
}
