System.register(['angular2/core', './like.component', './tweet.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, like_component_1, tweet_service_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            }],
        execute: function() {
            let TweetComponent = class TweetComponent {
                constructor(tweetService) {
                    this.tweets = tweetService.getTweets();
                }
            };
            TweetComponent = __decorate([
                core_1.Component({
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
                    providers: [tweet_service_1.TweetService],
                    directives: [like_component_1.LikeComponent]
                }), 
                __metadata('design:paramtypes', [tweet_service_1.TweetService])
            ], TweetComponent);
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map