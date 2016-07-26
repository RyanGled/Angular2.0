import {Component, Input, EventEmitter, Output} from 'angular2/core'

@Component({
    selector: 'likes',
    template: `
        <i class="glyphicon"
       [class.glyphicon-heart-empty]="!isLiked"
       [class.glyphicon-heart]="isLiked"
       (click)="toggleFillHeart()"></i>
       <span>{{ likeCount }}</span>
    `,
    styles: [`
        .glyphicon-heart-empty {
            color: #ccc;
            cursor: pointer;
        }
        .glyphicon-heart {
            color: deeppink;
            cursor: pointer;
        }
    `]
})
export class LikeComponent {
    @Input() isLiked = false;
    @Input() likeCount = 0;

    toggleFillHeart() {
        this.isLiked = !this.isLiked;
        if (this.isLiked===true) {
            this.likeCount = this.likeCount+1;
        } else {
            this.likeCount = this.likeCount-1;
        }
    }
}