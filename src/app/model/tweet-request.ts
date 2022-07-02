export class TweetRequest {
    tweetText!: String
    tag!: String

    constructor(tag: String, tweetText: String) {
        this.tweetText = tweetText;
        this.tag =  tag || "" ;
    }
}