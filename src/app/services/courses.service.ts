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

    filterCourses(value: string[]): Observable<Course[]> {
        const filterUrl = HOST + "/courses/filter" + (value? ("?title=" + value) : "");
        return this.http.get<Course[]>(filterUrl);
    }

    createCourse(course: Course): Observable<Course> {
        return this.http.post<Course>(`${HOST}/courses/add`, course);
    }

    editCourse(id: string, course: Course): Observable<Course> {
        return this.http.put<Course>(`${HOST}/courses/${id}`, course);
    }

    getCourse(id: string): Observable<Course> {
        return this.http.get<any>(`${HOST}/courses/${id}`);
    }

    deleteCourse(id: string): Observable<any>  {
        return this.http.delete(`${HOST}/courses/${id}`);
    }

    getAllAuthors(): Observable<any>{
        return this.http.get(`${HOST}/authors/all`);
    }

    createAuthor(name: string) {
        return this.http.post(`${HOST}/authors/add`, {name: `${name}`});
    }

    getAuthorById(id: string): Observable<any> {
        return this.http.get(`${HOST}/authors/${id}`);
    }
}
