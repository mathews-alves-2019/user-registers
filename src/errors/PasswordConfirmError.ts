export class PasswordConfirmError extends Error {
    constructor(paramName: string) {
        super(`Password not match with confirm password: ${paramName}`);
        this.name = 'PasswordNotMatchWithConfirmPassword';
    }
}
