import {Component, Input, EventEmitter, Output} from 'angular2/core'

@Component({
    selector: 'votes',
    template: `
        <div id="vote-container"></div>
        <i class="glyphicon glyphicon-menu-up" 
        [class.highlighted]="myVote == 1"
        (click)="toggleUpVote()"></i><br />
        <span class="vote-count">{{ voteCount + myVote }}</span><br />
        <i class="glyphicon glyphicon-menu-down"
        [class.highlighted]="myVote == -1"
        (click)="toggleDownVote()"></i>
    `,
    styles: [`
        .glyphicon {
            color: #ccc;
            cursor: pointer;
        }
        #vote-container {
            display: inline-block;
            width: 100%;
            text-align: center;
        }
        .highlighted {
            color: gold;
        }
    `]
})
export class VoteComponent {
    @Input() voteCount = 10;
    @Input() myVote = 0;

    @Output() vote = new EventEmitter();

    toggleUpVote() {
        if (this.myVote == 1) {
            return;
        }
        this.myVote++;
        this.vote.emit({ myVote: this.myVote });
    }
    toggleDownVote() {
        if (this.myVote == -1) {
            return;
        }
        this.myVote--;
        this.vote.emit({ myVote: this.myVote });
    }
}