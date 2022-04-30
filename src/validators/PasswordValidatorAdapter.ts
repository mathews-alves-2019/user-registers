import { PasswordValidator } from '../interfaces';

export class PasswordValidatorAdapter implements PasswordValidator {
    isValid(password: string): boolean {
        const numeros = /([0-9])/;
        const alfabeto = /([a-zA-Z])/;
        if (password.length < 8 || !password.match(numeros) || !password.match(alfabeto)) {
            return false;
        }
        return true;
    }
}
