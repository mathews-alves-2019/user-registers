import { PasswordValidator, Validation } from '../interfaces';
import { PasswordConfirmError } from '../errors';

export class PasswordValidation implements Validation {
    constructor(
        private readonly fieldName: string,
        private readonly confirmFieldName: string,
        private readonly passwordValidator: PasswordValidator,
    ) { }

    validate(input: any): Error {
        if (input[this.fieldName]) {
            if (input[this.fieldName] !== input[this.confirmFieldName]) {
                return new PasswordConfirmError(this.fieldName);
            }
            const isValid = this.passwordValidator.isValid(input[this.fieldName]);
            if (!isValid) {
                return new PasswordConfirmError(this.fieldName);
            }
        }
    }
}
