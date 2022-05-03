import { UserRegisterDTO } from '../../commons/dto';
import {
    Controller,
    HttpResponse,
    UpdateEntityRepository,
    Validation,
} from '../../../interfaces';
import { badRequest, serverError } from '../../helpers';

export class UpdateUserController implements Controller {
    constructor(
        private readonly validation: Validation,
        private readonly repository: UpdateEntityRepository,
    ) { }

    async handle(request: Request): Promise<HttpResponse> {
        try {
            let user: UserRegisterDTO;
            if (request.password) {
                const error = await this.validation.validate(request);
                if (error) {
                    console.error(error);
                    return badRequest(error);
                }
                user = new UserRegisterDTO(
                    request.name,
                    request.email,
                    request.password,
                );
            } else {
                user = new UserRegisterDTO(
                    request.name,
                    request.email,
                );
            }
            const response = await this.repository.execute(user, request.userId);
            return {
                statusCode: 200,
                body: response,
            };
        } catch (error: any) {
            return serverError(error);
        }
    }
}

interface Request {
    email: string
    password: string
    confirmPassword: string
    name: string
    userId: string
}
