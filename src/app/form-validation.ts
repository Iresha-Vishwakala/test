import { ValidationErrors, AbstractControl } from '@angular/forms';

export class FormValidation {

    static usernameShouldBeValid(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { shouldNotHaveSpaces: true }
        }

        // If there is no validation failure, return null
        return null;
    }
}
