import {
    Controller,
    EntityRepository,
    HttpResponse,
    Validation,
} from '../../../interfaces';
import { badRequest, serverError, unauthorized } from '../../helpers';
import { LoginDTO } from '../../commons/dto/LoginDTO';
import { getToken } from '../../commons/auth/auth';
import { isPasswordsEqual } from '../../helpers/password-helper';

export class LoginController implements Controller {
    constructor(
        private readonly validation: Validation,
        private readonly repository: EntityRepository,
    ) { }

    async handle(request: Request): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(request);
            if (error) {
                return badRequest(await error);
            }
            const login = new LoginDTO(request.email, request.password);
            const user = await this.repository.execute(login.email);
            if (!user || !isPasswordsEqual(user.password, login.password)) {
                return unauthorized();
            }
            return {
                statusCode: 200,
                body: { token: getToken(user.id, user.email) },
            };
        } catch (error: any) {
            return serverError(error);
        }
    }
}

export interface Request {
    email: string
    password: string
    name: string
}
