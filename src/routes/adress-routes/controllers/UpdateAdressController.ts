import {
    Controller,
    EntityRepository,
    HttpResponse,
    Validation,
} from '../../../interfaces';
import { badRequest, serverError } from '../../helpers';
import Adress from '../../commons/entities/Adress';

export class UpdateAdressController implements Controller {
    constructor(
        private readonly validation: Validation,
        private readonly repository: EntityRepository,
        private readonly findAdressRepository: EntityRepository,
    ) { }

    async handle(request: Request): Promise<HttpResponse> {
        try {
            if (request.cep) {
                const error = await this.validation.validate(request);
                if (error) {
                    return badRequest(error);
                }
            }
            const adress: Adress = await this.findAdressRepository.execute({
                id: request.id,
            }).then((response: Adress) => this.makeAdressEntity(response, request));

            const response = await this.repository.execute(adress);
            return {
                statusCode: 200,
                body: response,
            };
        } catch (error: any) {
            return serverError(error);
        }
    }

    makeAdressEntity(adress: Adress, request: Request) {
        const tempAdress = adress;
        tempAdress.cep = request.cep ? request.cep : tempAdress.cep;
        tempAdress.country = request.country ? request.country : tempAdress.country;
        tempAdress.houseNumber = request.houseNumber ? request.houseNumber : tempAdress.houseNumber;
        tempAdress.state = request.state ? request.state : tempAdress.state;
        tempAdress.street = request.street ? request.street : tempAdress.street;

        return tempAdress;
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
