import { NgModule } from '@angular/core';
import { CoursesListComponent } from '@app/features/courses/courses-list/courses-list.component';
import { CoursesComponent } from '@app/features/courses/courses.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { coursesFeatureKey, reducer } from '@app/store/courses/courses.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoursesEffects } from '@app/store/courses/courses.effects';

const routes: Routes = [
  { path: '', component: CoursesComponent }
];

const components = [
  CoursesComponent,
  CoursesListComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(coursesFeatureKey, reducer),
    EffectsModule.forFeature([CoursesEffects])
  ],
  exports: [components]
})
export class CoursesModule { }
