import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from '@app/features/courses/courses-list/courses-list.component';
import { CoursesComponent } from '@app/features/courses/courses.component';
import { SharedModule } from '@app/shared/shared.module';

const components = [
  CoursesComponent,
  CoursesListComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [components]
})
export class CoursesModule { }
