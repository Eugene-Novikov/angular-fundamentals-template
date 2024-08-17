import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CoursesStateFacade } from './courses.facade';
import { CoursesService } from '@app/services/courses.service';
import {
    requestAllCourses, requestAllCoursesSuccess, requestAllCoursesFail,
    requestFilteredCourses, requestFilteredCoursesSuccess,
    requestSingleCourse, requestSingleCourseSuccess, requestSingleCourseFail,
    requestDeleteCourse, requestDeleteCourseFail,
    requestEditCourse, requestEditCourseSuccess, requestEditCourseFail,
    requestCreateCourse, requestCreateCourseSuccess, requestCreateCourseFail
} from './courses.actions';

@Injectable()
export class CoursesEffects {

    constructor(
        private actions$: Actions,
        private coursesService: CoursesService,
        private coursesStateFacade: CoursesStateFacade,
        private router: Router
    ) { }

    getAll$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestAllCourses),
            mergeMap(() =>
                this.coursesService.getAll().pipe(
                    map(courses => requestAllCoursesSuccess({ courses })),
                    catchError(error => of(requestAllCoursesFail({ error })))
                )
            )
        )
    );

    filteredCourses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestFilteredCourses),
            withLatestFrom(this.coursesStateFacade.allCourses$),
            map(([action, courses]) =>
                courses!.filter(course => course.title.includes(action.title))
            ),
            map(courses => requestFilteredCoursesSuccess({ courses }))
        )
    );

    getSpecificCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestSingleCourse),
            mergeMap(action =>
                this.coursesService.getCourse(action.id).pipe(
                    map(course => requestSingleCourseSuccess({ course })),
                    catchError(error => of(requestSingleCourseFail({ error })))
                )
            )
        )
    );

    deleteCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestDeleteCourse),
            mergeMap(action =>
                this.coursesService.deleteCourse(action.id).pipe(
                    map(() => requestAllCourses()),
                    catchError(error => of(requestDeleteCourseFail({ error })))
                )
            )
        )
    );

    editCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestEditCourse),
            mergeMap(action =>
                this.coursesService.editCourse(action.id, action.course).pipe(
                    map(course => requestEditCourseSuccess({ course })),
                    catchError(error => of(requestEditCourseFail({ error })))
                )
            )
        )
    );

    createCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestCreateCourse),
            mergeMap(action =>
                this.coursesService.createCourse(action.course).pipe(
                    map(course => requestCreateCourseSuccess({ course })),
                    catchError(error => of(requestCreateCourseFail({ error })))
                )
            )
        )
    );

    redirectToTheCoursesPage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestCreateCourseSuccess, requestEditCourseSuccess, requestSingleCourseFail),
            map(() => this.router.navigate(['/courses']))
        ), { dispatch: false }
    );
}
