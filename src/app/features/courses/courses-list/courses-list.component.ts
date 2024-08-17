import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '@app/models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {

  @Input() courses: Course[] | null = [];
  @Input() editable: boolean = false;

  @Output() showCourse = new EventEmitter<Course>();
  @Output() editCourse = new EventEmitter<Course>();
  @Output() deleteCourse = new EventEmitter<Course>();

  onShowCourse(course: Course) {
    this.showCourse.emit(course);
  }

  triggerEditCourse(course: Course) {
    this.editCourse.emit(course);
  }

  triggerDeleteCourse(course: Course) {
    this.deleteCourse.emit(course);
  }
}
