import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CourseEditComponent } from './course-edit.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: CourseEditComponent }
];

@NgModule({
  declarations: [
    CourseEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CourseEditModule { }
