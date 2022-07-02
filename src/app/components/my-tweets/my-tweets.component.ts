import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetRequest } from 'src/app/model/tweet-request';
import { TweetService } from 'src/app/service/tweet.service';

@Component({
  selector: 'app-my-tweets',
  templateUrl: './my-tweets.component.html',
  styleUrls: ['./my-tweets.component.css'],
})
export class MyTweetsComponent implements OnInit {
  get: any;
  del!: String;
  name!: String;
  tweetExist: boolean = false;
  updateTweetText!: String;
  id!: String;
  message: String = 'No tweet found';
  authtoken: any;
  div1:boolean=false;
  isMyTweets:boolean=false;

  constructor(private tweetService: TweetService, private router: Router) {}

  ngOnInit(): void {
    this.name = (localStorage.getItem('userId') || '{}');
    this.authtoken = localStorage.getItem('authtoken');
    if(this.router.url==="/myTweets"){
      this.isMyTweets=true;
    }
    if (this.authtoken) {
      this.tweetService.getUserTweet(this.authtoken).subscribe(
        (response) => {
          this.get = response;
          this.tweetExist = true;
        },
        (error) => {
          console.log(error);
          this.get = error;
          if (this.get.statusCode === 500) this.message = 'No tweet found';
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }
  delete(del: String) {
    if (this.authtoken) {
      this.tweetService.deleteTweet(this.authtoken,del).subscribe(
        (response) => {
          for(const user of this.get){
            if(user.id===del){
              this.get.splice(this.get.indexOf(user.id),1);
              break;
            }
          }
            alert('Tweet Deleted');
            this.router.navigate(['/post']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  edit(id:string){
    let tweetRequest = new TweetRequest(this.name, this.updateTweetText);
    this.authtoken = localStorage.getItem('authtoken');
    if (this.authtoken) {
      this.tweetService.editTweet(this.authtoken,tweetRequest,id).subscribe(
        (response) => {
          this.get = response;
            alert('Edited your tweet');
           this.div1=false;
           this.id='';
           this.router.navigate(['/post']);
            this.ngOnInit();
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  editYourTweet(id:string){
    this.id=id;
    this.div1=true;
}
}
