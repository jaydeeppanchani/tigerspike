import { FormGroup } from '@angular/forms';

// custom validator to check that email and confirm email match
export function MustMatch(Email: string, ConfirmEmail: string) {
    return (formGroup: FormGroup) => {
        const email = formGroup.controls[Email];
        const confirmEmail = formGroup.controls[ConfirmEmail];

        if (!email || !confirmEmail) {
            return null;
        }

        // set error on validation fails
        if (email.value !== confirmEmail.value) {
            confirmEmail.setErrors({ mustMatch: true });
        } else {
            confirmEmail.setErrors(null);
        }
    };
}
