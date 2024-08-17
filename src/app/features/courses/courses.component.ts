import { Component, OnInit } from '@angular/core';
import { Course } from '@app/models/course';
import { CoursesStateFacade } from '@app/store/courses/courses.facade';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses$ = this.coursesFacade.allCourses$;

  constructor(private coursesFacade: CoursesStateFacade) {}

  ngOnInit() {
    this.coursesFacade.getAllCourses();
  }

  onSearch(searchStr: string) {
    // this.courses = searchStr.trim() === ''
    //   ? this.courses
    //   : this.courses.filter(course => course.title.toLowerCase().includes(searchStr.toLowerCase()));
    // this.coursesFacade.getFilteredCourses(searchValue);
  }
}
