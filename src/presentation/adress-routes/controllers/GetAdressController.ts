import {
    Controller,
    EntityRepository,
    HttpResponse,
} from '../../../interfaces';
import { serverError } from '../../helpers';

export class GetAdressWithQueryController implements Controller {
    constructor(
        private readonly repository: EntityRepository,
    ) { }

    async handle(request: Request): Promise<HttpResponse> {
        try {
            const response = await this.repository.execute(request);
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
    country: string
    state: string
    userId: string
    userIdFromToken: string
}
