import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CourseInfoComponent } from './course-info.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: CourseInfoComponent }
];

@NgModule({
  declarations: [CourseInfoComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CourseInfoModule { }
