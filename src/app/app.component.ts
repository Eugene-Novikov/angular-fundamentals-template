import { Component } from '@angular/core';
import { Course } from './models/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'courses-app';
  user = 'Harry Potter';

  currentCourse!: Course;

  login() {
    this.user = 'Harry Potter';
  }

  logout() {
    this.user = '';
  }
}
