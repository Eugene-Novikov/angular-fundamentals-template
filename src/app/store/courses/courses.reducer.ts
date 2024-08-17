import { Course } from '@app/models/course';
import { Action, createReducer, on } from '@ngrx/store';
import { requestAllCourses, requestAllCoursesFail, requestAllCoursesSuccess, requestCreateCourse, requestCreateCourseFail, requestCreateCourseSuccess, requestDeleteCourse, requestDeleteCourseFail, requestDeleteCourseSuccess, requestEditCourse, requestEditCourseFail, requestEditCourseSuccess, requestFilteredCourses, requestFilteredCoursesFail, requestFilteredCoursesSuccess, requestSingleCourse, requestSingleCourseFail, requestSingleCourseSuccess } from './courses.actions';

export interface CoursesState {
    allCourses: Course[] | null;
    course: Course | null;
    isAllCoursesLoading: boolean;
    isSingleCourseLoading: boolean;
    isSearchState: boolean;
    errorMessage: string | null;
}

export const initialState: CoursesState = {
    allCourses: [],
    course: null,
    isAllCoursesLoading: false,
    isSingleCourseLoading: false,
    isSearchState: false,
    errorMessage: null
};

export const coursesFeatureKey = 'courses';

export const coursesReducer = createReducer(
    initialState,

    on(requestAllCourses, state => ({ ...state, isAllCoursesLoading: true, errorMessage: null })),
    on(requestAllCoursesSuccess, (state, { courses }) => ({ ...state, allCourses: courses, isAllCoursesLoading: false })),
    on(requestAllCoursesFail, (state, { error }) => ({ ...state, isAllCoursesLoading: false, errorMessage: error })),

    on(requestSingleCourse, state => ({ ...state, isSingleCourseLoading: true, errorMessage: null })),
    on(requestSingleCourseSuccess, (state, { course }) => ({ ...state, course: course, isSingleCourseLoading: false })),
    on(requestSingleCourseFail, (state, { error }) => ({ ...state, isSingleCourseLoading: false, errorMessage: error })),

    // Handle request filtered courses
    on(requestFilteredCourses, state => ({
        ...state,
        isAllCoursesLoading: true,
        errorMessage: null
      })),
      on(requestFilteredCoursesSuccess, (state, { courses }) => ({
        ...state,
        allCourses: courses,
        isAllCoursesLoading: false
      })),
      on(requestFilteredCoursesFail, (state, { error }) => ({
        ...state,
        isAllCoursesLoading: false,
        errorMessage: error
      })),
    
      // Handle delete course
      on(requestDeleteCourse, state => ({
        ...state,
        allCourses: state.allCourses ? state.allCourses.filter((course: any) => course.id) : [],
        errorMessage: ""
      })),
      on(requestDeleteCourseSuccess, state => ({
        ...state
      })),
      on(requestDeleteCourseFail, (state, { error }) => ({
        ...state,
        errorMessage: error
      })),
    
      // Handle edit course
      on(requestEditCourse, state => ({
        ...state,
        errorMessage: ""
      })),
      on(requestEditCourseSuccess, (state, { course }) => ({
        ...state,
        allCourses: state.allCourses? state.allCourses.map((c: any) => c.id === course.id ? course : c) : [],
        course: course
      })),
      on(requestEditCourseFail, (state, { error }) => ({
        ...state,
        errorMessage: error
      })),
    
      // Handle create course
      on(requestCreateCourse, state => ({
        ...state,
        errorMessage: ""
      })),
      on(requestCreateCourseSuccess, (state, { course }) => ({
        ...state,
        allCourses: [...state.allCourses!, course]
      })),
      on(requestCreateCourseFail, (state, { error }) => ({
        ...state,
        errorMessage: error
      }))
);

export const reducer = (state: CoursesState, action: Action): CoursesState => coursesReducer(state, action);
