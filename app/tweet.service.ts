
export class TweetService {
    getTweets() : {}[] {
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