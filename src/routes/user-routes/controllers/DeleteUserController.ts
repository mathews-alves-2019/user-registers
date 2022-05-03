import {
    Controller,
    EntityRepository,
    HttpResponse,
} from '../../../interfaces';
import { serverError } from '../../helpers';

export class DeleteUserController implements Controller {
    constructor(
        private readonly repository: EntityRepository,
    ) { }

    async handle(request: Request): Promise<HttpResponse> {
        try {
            console.log(request.userId);
            const response = await this.repository.execute(request.userId);
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
    userId: string
}
