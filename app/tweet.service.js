System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            class TweetService {
                getTweets() {
                    return [{
                            name: 'RyanGled',
                            handle: '@ryangled',
                            image: 'http://lorempixel.com/100/100/people',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            likeCount: 10
                        },
                        {
                            name: 'Ribbit',
                            handle: '@frog_boy',
                            image: 'http://lorempixel.com/100/100/people?1',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            likeCount: 0
                        },
                        {
                            name: 'Weirdo',
                            handle: '@weird_dude',
                            image: 'http://lorempixel.com/100/100/people?2',
                            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            likeCount: 3
                        }];
                }
            }
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map