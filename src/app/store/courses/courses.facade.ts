import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CoursesState } from './courses.reducer';
import {
    requestAllCourses,
    requestSingleCourse,
    requestFilteredCourses,
    requestEditCourse,
    requestCreateCourse,
    requestDeleteCourse
} from './courses.actions';
import {
    isAllCoursesLoadingSelector,
    isSingleCourseLoadingSelector,
    isSearchingStateSelector,
    getAllCourses,
    getCourse,
    getErrorMessage
} from './courses.selectors';

@Injectable({
    providedIn: 'root'
})
export class CoursesStateFacade {

    isAllCoursesLoading$ = this.store.pipe(select(isAllCoursesLoadingSelector));
    isSingleCourseLoading$ = this.store.pipe(select(isSingleCourseLoadingSelector));
    isSearchingState$ = this.store.pipe(select(isSearchingStateSelector));
    allCourses$ = this.store.pipe(select(getAllCourses));
    course$ = this.store.pipe(select(getCourse));
    errorMessage$ = this.store.pipe(select(getErrorMessage));

    constructor(private store: Store<CoursesState>) { }

    getAllCourses() {
        this.store.dispatch(requestAllCourses());
    }

    getSingleCourse(id: string) {
        this.store.dispatch(requestSingleCourse({ id }));
    }

    getFilteredCourses(searchValue: string) {
        this.store.dispatch(requestFilteredCourses({ title: searchValue }));
    }

    editCourse(body: any, id: string) {
        this.store.dispatch(requestEditCourse({ course: body, id }));
    }

    createCourse(body: any) {
        this.store.dispatch(requestCreateCourse({ course: body }));
    }

    deleteCourse(id: string) {
        this.store.dispatch(requestDeleteCourse({ id }));
    }
}
