import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { EmailValidatorDirective } from '@app/shared/directives/email.directive';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  registrationForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [this.emailValidator]),
    password: new FormControl('', [Validators.required])
  });

  submit() {
    this.registrationForm.markAllAsTouched();
  }

  get emailValidator(): ValidatorFn {
    const directive = new EmailValidatorDirective();
    return (control: AbstractControl) => directive.validate(control);
  }
}
