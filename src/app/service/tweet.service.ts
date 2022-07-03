import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TweetRequest } from '../model/tweet-request';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TweetService {
  user!: string;
  delete!: string;

  constructor(private http: HttpClient) {}

  getAllTweets(authtoken: string | null) {
    return this.http.get(environment.BASE_URL + 'all', {
      headers: { Authorization: `Bearer ${authtoken}` },
    });
  }
  postTweet(authtoken: string | null, tweetRequest: TweetRequest) {
    this.user = localStorage.getItem('userId') || '{}';
    return this.http.post(
      environment.BASE_URL + this.user + '/add/',
      tweetRequest,
      {
        headers: { Authorization: `Bearer ${authtoken}` },
        responseType: 'text',
      }
    );
  }

  editTweet(
    authtoken: string | null,
    tweetRequest: TweetRequest,
    edit: String
  ) {
    this.user = localStorage.getItem('userId') || '{}';
    return this.http.put(
      environment.BASE_URL + this.user + '/update/' + edit,
      tweetRequest,
      {
        headers: { Authorization: `Bearer ${authtoken}` },
        responseType: 'text',
      }
    );
  }
  getUserTweet(authtoken: string | null) {
    this.user = localStorage.getItem('userId') || '{}';
    return this.http.get(environment.BASE_URL + this.user, {
      headers: { Authorization: `Bearer ${authtoken}` },
    });
  }
  deleteTweet(authtoken: string | null, del: String) {
    this.user = localStorage.getItem('userId') || '{}';
    return this.http.delete(
      environment.BASE_URL + this.user + '/delete/' + del,
      {
        headers: { Authorization: `Bearer ${authtoken}` },
        responseType: 'text',
      }
    );
  }
}
