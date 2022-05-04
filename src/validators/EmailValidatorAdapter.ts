import validator from 'validator';
import { BasicValidator } from '../interfaces';

export class EmailValidatorAdapter implements BasicValidator {
    isValid(email: string): boolean {
        return validator.isEmail(email);
    }
}
