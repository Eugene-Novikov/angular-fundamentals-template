import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '@app/models/course';
import { map, Observable } from 'rxjs';

const HOST = 'http://localhost:4000'
const ALL_COURSES_URL = `${HOST}/courses/all`;

@Injectable({
    providedIn: 'root'
})
export class CoursesService {

    constructor(
        private http: HttpClient
    ) { }

    getAll(): Observable<Course[]> {
        return this.http.get<{ result: Course[] }>(ALL_COURSES_URL).pipe(map(response => response.result));
    }

    createCourse(course: any) { // replace 'any' with the required interface
        // Add your code here
    }

    editCourse(id: string, course: any) { // replace 'any' with the required interface
        // Add your code here
    }

    getCourse(id: string) {
        // Add your code here
    }

    deleteCourse(id: string) {
        // Add your code here
    }

    filterCourses(value: string) {
        // Add your code here
    }

    getAllAuthors() {
        // Add your code here
    }

    createAuthor(name: string) {
        // Add your code here
    }

    getAuthorById(id: string) {
        // Add your code here
    }
}
