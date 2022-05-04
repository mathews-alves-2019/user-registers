import { BasicValidator, Validation } from '../interfaces';
import { InvalidParamError } from '../errors';

export class CEPValidation implements Validation {
    constructor(
        private readonly fieldName: string,
        private readonly cepValidator: BasicValidator,
    ) { }

    validate(input: any): Error {
        const isValid = this.cepValidator.isValid(input[this.fieldName]);
        if (!isValid) {
            return new InvalidParamError(this.fieldName);
        }
    }
}
