import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from "@angular/forms";

@Directive({
    selector: '[emailValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: EmailValidatorDirective,
            multi: true,
        }
    ]
})
export class EmailValidatorDirective {
    validate(control: AbstractControl): ValidationErrors | null {
        const validator = Validators.compose([Validators.required, Validators.email]);
        return validator!(control);
    }
}
