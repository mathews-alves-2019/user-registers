import { UserNotExistsError } from '../../../errors/UserNotExistsError';
import {
    Controller,
    EntityRepository,
    HttpResponse,
} from '../../../interfaces';
import { badRequest, serverError } from '../../helpers';

export class GetUserController implements Controller {
    constructor(
        private readonly repository: EntityRepository,
    ) { }

    async handle(request: Request): Promise<HttpResponse> {
        try {
            const response = await this.repository.execute(request.id);
            if (!response) {
                return badRequest(new UserNotExistsError());
            }
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
    id: string
}
