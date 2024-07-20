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
  
  courses: Course[] = [
    { 
      id: '1', 
      title: 'Angular', 
      description: 'Description of angular course', 
      duration: 40, 
      creationDate: new Date(), 
      authors: ['Jane Doe', 'John Doe'] 
    },
    { 
      id: '2', 
      title: 'React', 
      description: 'Description of react course', 
      duration: 30, 
      creationDate: new Date(), 
      authors: ['Jim Button', 'John Doe'] 
    },
    { 
      id: '3', 
      title: 'Core JS', 
      description: 'Description of js course', 
      duration: 20, 
      creationDate: new Date(), 
      authors: ['Jane Doe', 'John Doe'] 
    },
  ];

  login() {
    this.user = 'Harry Potter';
  }

  logout() {
    this.user = '';
  }
}
