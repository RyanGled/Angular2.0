import {Component} from 'angular2/core'
import {LikeComponent} from './like.component'
import {TweetService} from './tweet.service'

@Component({
    selector: 'tweet',
    template: `
        <div class="media" *ngFor="#tweet of tweets">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" src="{{ tweet.image }}">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{ tweet.name }}</h4>
                <h4 class="twitter-handle">{{ tweet.handle }}</h4>
                <p>{{ tweet.desc }}</p>
                <likes [likeCount]="tweet.likeCount"></likes>
            </div>
        </div>
    `,
    styles: [`
        .media {
            margin: 10px 0 0 20px;
        }
        .media-object {
            border-radius: 5px;
        }
        .media-heading, .twitter-handle {
            display: inline;
            margin-right: 10px;
        }
        .twitter-handle {
            color: #c5c5c5;
            font-size: 15px;
        }
    `],
    providers: [TweetService],
    directives: [LikeComponent]
})
export class TweetComponent {
    tweets;

    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }
}