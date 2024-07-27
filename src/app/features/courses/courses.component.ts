import { Component } from '@angular/core';
import { Course } from '@app/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  private courses: Course[] = [
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

  filteredCources: Course[] = this.courses;

  onSearch(searchStr: string) {
    this.filteredCources = searchStr.trim() === ''
      ? this.courses
      : this.courses.filter(course => course.title.toLowerCase().includes(searchStr.toLowerCase()));
  }
}
