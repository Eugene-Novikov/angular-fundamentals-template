import { Component, OnInit } from '@angular/core';
import { Course } from '@app/models/course';
import { CoursesService } from '@app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];

  constructor(
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.coursesService.getAll().subscribe((result) => this.courses = result);
  }

  onSearch(searchStr: string) {
    this.courses = searchStr.trim() === ''
      ? this.courses
      : this.courses.filter(course => course.title.toLowerCase().includes(searchStr.toLowerCase()));
  }
}
