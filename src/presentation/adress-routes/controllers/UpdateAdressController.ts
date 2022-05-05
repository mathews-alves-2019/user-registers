import {
    Controller,
    EntityRepository,
    HttpResponse,
    Validation,
} from '../../../interfaces';
import { badRequest, serverError } from '../../helpers';

export class UpdateAdressController implements Controller {
    constructor(
        private readonly validation: Validation,
        private readonly repository: EntityRepository,
    ) { }

    async handle(request: Request): Promise<HttpResponse> {
        try {
            if (request.cep) {
                const error = await this.validation.validate(request);
                if (error) {
                    return badRequest(error);
                }
            }

            await this.repository.execute(request);
            return {
                statusCode: 200,
                body: {},
            };
        } catch (error: any) {
            return serverError(error);
        }
    }
}

interface Request {
    id: string
    cep: string
    street: string
    houseNumber: string
    country: string
    state: string
}
