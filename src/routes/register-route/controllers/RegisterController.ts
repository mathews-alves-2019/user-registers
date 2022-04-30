import {
    Controller,
    EntityRepository,
    HttpResponse,
    Validation,
} from '../../../interfaces';
import { badRequest, serverError } from '../../helpers';
import { UserRegisterDTO } from '../../commons/dto/UserRegisterDTO';

export class RegisterController implements Controller {
    constructor(
        private readonly validation: Validation,
        private readonly repository: EntityRepository,
    ) { }

    async handle(request: Request): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(request);
            if (error) {
                return badRequest(error);
            }
            const user = new UserRegisterDTO(request.name, request.email, request.password);
            const response = await this.repository.execute(user);
            return {
                statusCode: 200,
                body: response,
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
