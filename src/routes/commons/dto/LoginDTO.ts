export class LoginDTO {
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    public email: string;

    public password: string;
}
