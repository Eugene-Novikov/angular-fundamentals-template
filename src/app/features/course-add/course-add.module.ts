import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CourseAddComponent } from './course-add.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: CourseAddComponent }
];

@NgModule({
  declarations: [
    CourseAddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CourseAddModule { }
