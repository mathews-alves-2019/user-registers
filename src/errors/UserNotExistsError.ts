export class UserNotExistsError extends Error {
    constructor() {
        super('User not found.');
        this.name = 'UserNotExists';
    }
}
