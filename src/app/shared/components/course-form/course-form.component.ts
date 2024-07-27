import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder, FormControl, FormGroup,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  constructor(public fb: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  courseForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', [Validators.required, Validators.minLength(2)]),
    author: new FormControl('', [this.latinLettersAndNumbersValidator]),
    authors: new FormArray([]),
    duration: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  get latinLettersAndNumbersValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const value = control.value;
      if (!value) {
        return null;
      }

      const isValid = /^[a-zA-Z0-9\s]*$/.test(value);
      return isValid ? null : { nonLatinOrNumber: true };
    };
  }

  get authors(): FormArray {
    return this.courseForm.get('authors') as FormArray;
  }

  addAuthor() {
    const authorControl = this.courseForm.get('author')!;
    const authorValue = authorControl.value;
    
    if (!authorValue || authorControl.invalid) {
      return;
    }

    this.authors.push(new FormControl(authorValue));
    authorControl.reset();
  }

  deleteAuthor(index: number) {
    this.authors.removeAt(index);
  }

  submit() {
    this.courseForm.markAllAsTouched();
  }
}
