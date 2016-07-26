import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from "./authors.component";
import {FavouriteComponent} from "./favourite.component";
import {LikeComponent} from "./like.component";
import {VoteComponent} from "./vote.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ title }}</h1>
        <courses></courses>
        <authors></authors>
        <img bind-src="imageUrl" />
        
        <div (click)="onDivClick()">
            <button class="btn btn-primary" 
            [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'gray'"
            (click)="onClick($event)">
                Submit
            </button>
        </div>
        
        <favourites [isFavourite]="post.isFavourite" (change)="onFavouriteChange($event)"></favourites>
        <likes [isLiked]="post.isLiked"></likes>
        <votes
            [voteCount]="post.voteCount"
            [myVote]="post.myVote"
            (vote)="onVote($event)"></votes>
    `,
    directives: [CoursesComponent,AuthorsComponent,FavouriteComponent,LikeComponent,VoteComponent]
})
export class AppComponent {
    title = "Angular App";
    imageUrl = "http://lorempixel.com/400/200";
    isActive = true;

    onDivClick() {
        console.log('div click');
    }

    onClick($event) {
        // $event.stopPropagation();
        console.log('clicked button', $event);
    }

    onFavouriteChange($event) {
        console.log($event);
    }

    onVote($event) {
        console.log($event);
    }

    post = {
        title: 'Post Title',
        isFavourite: true,
        isLiked: false,
        myVote: 0,
        voteCount: 10
    }
}
