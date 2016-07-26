import {Component} from 'angular2/core'
import {CourseService} from "./course.service"
import {AutoGrowDirective} from "./auto-grow.directive";

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{ title }}
        
        <!-- both below inputs are utilising binding between the model and the DOM -->
        <input type="text" autoGrow [value]="title" (input)="title = $event.target.value" />
        <!--<input type="text" [(ngModel)]="title" />-->
        Preview: {{ title }}
        <input type="button" (click)="title = ''" value="Clear Input" />
        
        <ul>
            <li *ngFor="#course of courses">
                {{ course }}
            </li>
        </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
    title: string = "The title of Courses page";
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}