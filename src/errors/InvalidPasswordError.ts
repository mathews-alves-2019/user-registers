export class InvalidPasswordError extends Error {
    constructor(paramName: string) {
        super(`Password should contains letters and numbers. Field: ${paramName}`);
        this.name = 'InvalidPassword';
    }
}
