import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '@app/models/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {

  @Input() course!: Course;
  @Input() editable = false;
  @Output() clickOnShow = new EventEmitter<void>();

  showCourse() {
    this.clickOnShow.emit();
  }
}
