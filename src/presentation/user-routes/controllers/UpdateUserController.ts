import {
    Controller,
    HttpResponse,
    UpdateEntityRepository,
    Validation,
} from '../../../interfaces';
import { badRequest, serverError } from '../../helpers';
import { FindUserByIdRepository } from '../../commons/repositories/user';

export class UpdateUserController implements Controller {
    constructor(
        private readonly validation: Validation,
        private readonly repository: UpdateEntityRepository,
        private readonly findRepository: FindUserByIdRepository,
    ) { }

    async handle(request: Request): Promise<HttpResponse> {
        try {
            if (request.password) {
                const error = await this.validation.validate(request);
                if (error) {
                    return badRequest(error);
                }
            }

            const user = await this.findRepository.execute(request.userId);
            user.email = request.email;
            user.name = request.name;
            if (request.password) {
                user.password = request.password;
            }

            const response = await this.repository.execute(user, request.userId);
            return {
                statusCode: 200,
                body: response,
            };
        } catch (error: any) {
            console.error(error);
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
