import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetRequest } from 'src/app/model/tweet-request';
import { TweetService } from 'src/app/service/tweet.service';

@Component({
  selector: 'app-post-tweet',
  templateUrl: './post-tweet.component.html',
  styleUrls: ['./post-tweet.component.css'],
})
export class PostTweetComponent implements OnInit {
  tweetText!: String;
  name!: String;
  get: any;
  authtoken: any;
  constructor(private tweetservice: TweetService, private router: Router) {}

  ngAfterViewInit():void{
    this.router.navigate(['/post']);
  }
  ngOnInit(): void {
    this.name = (localStorage.getItem('userId') || '{}');
    this.router.navigate(['/post']);
  }
  postTweet() {
    let tweetRequest = new TweetRequest(this.name, this.tweetText);
    this.authtoken = localStorage.getItem('authtoken');
    if (this.authtoken) {
      this.tweetservice.postTweet(this.authtoken,tweetRequest).subscribe(
        (response) => {
          this.get = response;
            alert('Tweet Saved');
            this.tweetText = '';
            this.router.navigate(['/myTweets'])
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
