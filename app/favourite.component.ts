import {Component, Input, EventEmitter, Output} from 'angular2/core'

@Component({
    selector: 'favourites',
    templateUrl: 'app/favourite.template.html',
    //Styles within a component are given a random-gen ID by Angular, this is super cool because it means when
    //importing components into an existing complex page, only the component classes are given the styles,
    //NOT all the classes on the page
    styleUrls: ['app/favourite.template.css']
})
export class FavouriteComponent {
    //@Input() makes it a public property of the component
    @Input() isFavourite = false;

    @Output() change = new EventEmitter();

    toggleFillStar() {
        this.isFavourite = !this.isFavourite;
        this.change.emit({ newValue: this.isFavourite });
    }
}