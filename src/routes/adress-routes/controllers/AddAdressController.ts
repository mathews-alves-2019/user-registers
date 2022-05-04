import { AdressDTO } from '../../commons/dto';
import {
    Controller,
    EntityRepository,
    HttpResponse,
    Validation,
} from '../../../interfaces';
import { badRequest, serverError } from '../../helpers';

export class AddAdressController implements Controller {
    constructor(
        private readonly validation: Validation,
        private readonly repository: EntityRepository,
    ) { }

    async handle(request: Request): Promise<HttpResponse> {
        try {
            const error = await this.validation.validate(request);
            if (error) {
                return badRequest(error);
            }
            const adressDTO = new AdressDTO(
                request.cep,
                request.street,
                request.usersId,
                request.houseNumber,
                request.country,
                request.state,
            );
            const response = await this.repository.execute(adressDTO);
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
    cep: string
    street: string
    usersId: string
    houseNumber: string
    country: string
    state: string
}
