import {
    Controller,
    EntityRepository,
    HttpResponse,
} from '../../../interfaces';
import { serverError } from '../../helpers';

export class GetUserController implements Controller {
    constructor(
        private readonly repository: EntityRepository,
    ) { }

    async handle(request: Request): Promise<HttpResponse> {
        try {
            const response = await this.repository.execute(request.userId);
            console.log(response);
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
    userId: string
}
